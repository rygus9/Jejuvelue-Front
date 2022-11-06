import { AxiosResponse } from "axios";
import client from "./client";

interface MyPageApiRes {
  stampList: {
    placeId: number;
    name: string;
    shortDescription: string;
    stampImageUrl: string;
    placeImageUrl: string;
  }[];
  badgeList: {
    badgeId: number;
    description: string;
    badgeImageUrl: string;
  }[];
  stampCnt: number;
  badgeCnt: number;
}

const myPageApi = (): Promise<AxiosResponse<MyPageApiRes>> => {
  return client.post("/api/v1/member/mypage", {
    nickname: localStorage.getItem("nickname") as string,
  });
};

export default myPageApi;
