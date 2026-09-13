export type ChatMessagePayload = {
  content: string;
  model: string;
  attachments?: File[];
};

export const chatApi = {
  async sendMessage(payload: ChatMessagePayload) {
    void payload;
    throw new Error("chatApi.sendMessage is not implemented for the static homepage yet.");
  },
};
