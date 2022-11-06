import client from "./client";

const stampApi = (placeId: string) => {
  const data = { nickname: localStorage.getItem("nickname") as string };
  return client.post("/api/v1/place/visit" + "/" + placeId, data);
};

export default stampApi;
