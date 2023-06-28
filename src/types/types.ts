
export enum HubAIModel {
    Nearby = 'nearby',
    Text = 'text',
    Image = 'image'
}

export enum HubChatAuthor {
    user = "user",
    hub = "hub",
    system = "system"
}
export type HubChatMessage = {
    author: string,
    text: string,
    action?: string
}
export default HubAIModel;