import { AxiosResponse } from "axios";
import api from "./api";

interface MockedAxiosMessageResponse {
  data: {
    message: MessageType;
    status: string;
  };
  status: number;
  statusText: string;
  headers: object;
  config: object;
  request: object;
}

export interface MessageType {
  name: string;
  email: string;
  message: string;
}

const SendMessage = async (
  message: MessageType,
): Promise<MockedAxiosMessageResponse> => {
  // const response = await api.post("/subscribe", message);
  const mockedResponse: MockedAxiosMessageResponse = {
    data: {
      message,
      status: "Message send",
    },
    status: 200,
    statusText: "OK",
    headers: {},
    config: {},
    request: {},
  };
  return mockedResponse;
};

const MessageAPI = {
  SendMessage,
};

export default MessageAPI;
