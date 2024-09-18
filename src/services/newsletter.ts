import { AxiosResponse } from "axios";
import api from "./api";

interface MockedAxiosResponse {
  data: {
    status: string;
  };
  status: number;
  statusText: string;
  headers: object;
  config: object;
  request: object;
}

const SubscribeToNewsLetter = async (
  email: string,
): Promise<MockedAxiosResponse> => {
  // const response = await api.post("/subscribe", email);
  const mockedResponse: MockedAxiosResponse = {
    data: {
      status: "subscribed",
    },
    status: 200,
    statusText: "OK",
    headers: {},
    config: {},
    request: {},
  };
  return mockedResponse;
};

const NewsletterApi = {
  SubscribeToNewsLetter,
};

export default NewsletterApi;
