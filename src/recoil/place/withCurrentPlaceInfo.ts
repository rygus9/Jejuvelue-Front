import placeIdAtom from "@/recoil/place/placeIdAtom";
import detailPageApi from "@/api/detailPageApi";
import { selector, selectorFamily } from "recoil";

const withPlaceInfo = selectorFamily({
  key: "WithPlaceInfo",
  get: (placeId: number) => async () => {
    const res = await detailPageApi(placeId.toString());
    return res.data;
  },
});

const withCurrentPlaceInfo = selector({
  key: "WithCurrentPlaceInfo",
  get: ({ get }) => get(withPlaceInfo(get(placeIdAtom))),
});

export default withCurrentPlaceInfo;
