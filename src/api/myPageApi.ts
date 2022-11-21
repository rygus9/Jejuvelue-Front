import { AxiosResponse } from "axios";
import client from "./client";

export interface StampInfo {
  placeId: number;
  name: string;
  shortDescription: string;
  stampImageUrl: string;
  placeImageUrl: string;
}

export interface BadgeInfo {
  badgeId: number;
  description: string;
  badgeImageUrl: string;
}
export interface MyPageApiRes {
  stampList: StampInfo[];
  badgeList: BadgeInfo[];
  stampCnt: number;
  badgeCnt: number;
}

export type StampListAndCount = Pick<MyPageApiRes, "stampCnt" | "stampList">;
export type BadgeListAndCount = Pick<MyPageApiRes, "badgeCnt" | "badgeList">;

const myPageApi = (): Promise<AxiosResponse<MyPageApiRes>> => {
  return client.post("/api/v1/member/mypage", {
    nickname: localStorage.getItem("nickname") as string,
  });
};

export default myPageApi;
