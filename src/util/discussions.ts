import { IChannel, IPost, PostReaction, SharingAccess, createChannel, createPost, createReaction, removePost, searchChannels, searchPosts } from '@esri/hub-discussions';
import { createGroup, IGroup, SearchQueryBuilder, searchGroups } from "@esri/arcgis-rest-portal";

import state from './state';

const hubChatHistoryKeyword = "hubChatHistory";

export async function deleteResponse(postId: string) {
  return removePost({
    postId,
    ...state.context.hubRequestOptions
  })
}


export async function addResponseFeedback(postId: string = null, reaction: PostReaction = PostReaction.EYES) {
  if(!postId) {
    return null
  };
  
  return createReaction({
    data: {
      postId,
      value: reaction,
    },
    ...state.context.hubRequestOptions
  })
}

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

export async function getChatHistory(channelId: string=null): Promise<IPost[]> {
  if(!channelId) {
    chatHistoryChannel = await getChatChannel();
    channelId = chatHistoryChannel.id
  }
  const posts = await searchPosts({
    data: {
      num: 100,
      channels: [channelId],
      // access: [SharingAccess.PRIVATE],
    },
    ...state.context.hubRequestOptions    
  })


  return posts.items;
}
export async function addChatHistory(channelId:string, text: string, postId: string = null) {
  const data = {
    channelId: channelId,
    body: text,
    parentId: postId,
    discussion: 'hub://compass/general'
  }


  const post = await createPost({
    data,
    ...state.context.hubRequestOptions    
  })

  return post;

}

export async function getGroupChannel(groupId: string = "") {
  const channels = await searchChannels({
    data: {
      // num: 1,
      groups: [groupId],
      // access: [SharingAccess.PRIVATE],
    },
    ...state.context.hubRequestOptions
  })

  return channels.items.length > 0 ? channels.items[0] : null;
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

export function getChannels() {
  console.debug("getChannels", state.user.groups);

  return state.user.groups
}