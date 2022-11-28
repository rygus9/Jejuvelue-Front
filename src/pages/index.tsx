import MapContainer from "@/components/common/MapContainer";
import PlaceDetail from "@/components/domain/main/PlaceDetail";
import Header from "@/components/layout/Header";
import placeIdAtom from "@/recoil/place/placeIdAtom";
import placeListAtom from "@/recoil/place/placeListAtom";
import { useRecoilState, useRecoilValue } from "recoil";

export default function Home() {
  const [placeId, setPlaceId] = useRecoilState(placeIdAtom);
  const placeList = useRecoilValue(placeListAtom);

  return (
    <>
      <Header isMyPage></Header>
      <main>
        <section className="h-[calc(100vh-80px-156px)]">
          <MapContainer
            placeId={placeId}
            setPlace={setPlaceId}
            placeList={placeList}
          ></MapContainer>
        </section>
        <section className="fixed bottom-0 z-10 h-44 w-full max-w-xl rounded-t-2xl bg-white">
          <PlaceDetail
            {...placeList?.filter((elem) => elem.placeId === placeId)[0]}
          ></PlaceDetail>
        </section>
      </main>
    </>
  );
}
