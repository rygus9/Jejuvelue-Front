import client from "./client";

const loginApi = (nickname: string) =>
  client.post("/api/v1/auth/login", {
    nickname: nickname,
  });

export default loginApi;
