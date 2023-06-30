import { IChannel, IPost, SharingAccess, createChannel, createPost, searchChannels, searchPosts } from '@esri/hub-discussions';
import { createGroup, IGroup, SearchQueryBuilder, searchGroups } from "@esri/arcgis-rest-portal";

import state from './state';

const hubChatHistoryKeyword = "hubChatHistory";

export async function findOrCreateChatHistoryGroup() {
  let chatHistoryGroup:IGroup = null;

  // Get the Chat history group, or create one if it doesn't exist yet.
  const query = new SearchQueryBuilder()
                .match(hubChatHistoryKeyword)
                .in("typekeywords");
  const searchResponse = await searchGroups({
      q: query,
      ...state.context.hubRequestOptions
    },
  );
  console.debug("Find chat history group", searchResponse)

  // TODO: catch for potential duplicate 'chat history' groups
  if(searchResponse.results.length > 0) {
    chatHistoryGroup = searchResponse.results[0];
  } else {
    const createGroupResponse = await createGroup({
      group: {
        title: "Chat History",
        access: "private",
        typeKeywords: [hubChatHistoryKeyword]
      },
      ...state.context.hubRequestOptions
    })
    console.debug("Chat History createGroupResponse", createGroupResponse);

    if(createGroupResponse.success) {
      chatHistoryGroup = createGroupResponse.group;
    }
    
  }
  return chatHistoryGroup;  
}

export async function createChatHistory(chatHistoryGroup: IGroup) {
  
  if(!!chatHistoryGroup) {
    const channel = await createChannel({ 
      data: {
        name: "Chat History",
        // num: 1,
        groups: [chatHistoryGroup.id],
        access: SharingAccess.PRIVATE,
      },
      ...state.context.hubRequestOptions    
    })
  
    return channel;
  }
  
}

// TODO move this to state?
let chatHistoryChannel:IChannel = null;

export async function getChatHistory(): Promise<IPost[]> {
  chatHistoryChannel = await getChatChannel();
  const posts = await searchPosts({
    data: {
      // num: 1,
      channels: [chatHistoryChannel.id],
      // access: [SharingAccess.PRIVATE],
    },
    ...state.context.hubRequestOptions    
  })

  return posts.items;
}
export async function addChatHistory(text: string ) {

 const post = await createPost({
  data: {

    channelId: chatHistoryChannel.id,
    body: text,
    discussion: 'hub://compass/general'
  },
  ...state.context.hubRequestOptions    
})

return post;

}

export async function getChatChannel() {

  const chatHistoryGroup = await findOrCreateChatHistoryGroup();
  let chatHistoryChannel:IChannel = null;

  console.debug("user", state.user);
  const channels = await searchChannels({
    data: {
      // num: 1,
      groups: [chatHistoryGroup.id],
      // access: [SharingAccess.PRIVATE],
    },
    ...state.context.hubRequestOptions
  })

  console.debug("searchChannels", channels);

  if(channels.items.length > 0) {
    chatHistoryChannel = channels.items[0];
  } else {
    chatHistoryChannel = await createChatHistory(chatHistoryGroup);
  }
  console.debug("chatHistoryChannel", chatHistoryChannel);

  return chatHistoryChannel;
}