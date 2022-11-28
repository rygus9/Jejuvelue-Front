import placeListApi from "../../api/placeListApi";
import { atom, selector } from "recoil";

const placeListAtom = atom({
  key: "PlaceListAtom",
  default: selector({
    key: "PlaceListAtom/Default",
    get: async () => {
      const data = await placeListApi();
      return data.data;
    },
  }),
});

export default placeListAtom;
