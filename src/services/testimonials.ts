import axios, { AxiosResponse } from "axios";
import api from "./api";

interface MockedAxiosResponse {
  data: Testimonial[];
  status: number;
  statusText: string;
  headers: object;
  config: object;
  request: object;
}

export interface Testimonial {
  user: string;
  location: string;
  testimonial: string;
}

export const mockedTestimonials: Testimonial[] = [
  {
    user: "Mr. and Mrs. Baxter",
    location: "Uk",
    testimonial: "Calm, Serene, Retro – What a way to relax and enjoy",
  },
  {
    user: "Robert",
    location: "US",
    testimonial: "I loved the beach!",
  },
  {
    user: "Laura",
    location: "Japan",
    testimonial: "The calm environment reminded me of home.",
  },
  {
    user: "Amir",
    location: "Senegal",
    testimonial: "Liked the bar and food a lot!",
  },
  {
    user: "Mr. Moacir",
    location: "Brazil",
    testimonial:
      "Gostei bastante, só faltou churrasco! (This user didn't know how to speak english)",
  },
];

export const getTestimonials = async (): Promise<Testimonial[]> => {
  // const response = await api.get("/testimonials");
  const mockedResponse: MockedAxiosResponse = {
    data: mockedTestimonials,
    status: 200,
    statusText: "OK",
    headers: {},
    config: {},
    request: {},
  };
  return mockedResponse.data;
};
