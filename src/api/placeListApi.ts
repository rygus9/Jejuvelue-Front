import { AxiosResponse } from "axios";
import client from "./client";

interface PlaceListApiRes {
  placeId: number;
  name: string;
  shortDescription: string;
  stampImageUrl: string;
  placeImageUrl: string;
  latitude: number;
  longitude: number;
}

const placeListApi = (): Promise<AxiosResponse<PlaceListApiRes[]>> => {
  const data = localStorage.getItem("nickname") as string;
  return client.post("/api/v1/place", { nickname: data });
};

export default placeListApi;
