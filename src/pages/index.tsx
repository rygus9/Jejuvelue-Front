import placeListApi, { PlaceListApiRes } from "@/api/placeListApi";
import MapContainer from "@/components/common/MapContainer";
import PlaceDetail from "@/components/domain/main/PlaceDetail";
import Header from "@/components/layout/Header";
import { useEffect, useState } from "react";

export default function Home() {
  const [placeId, setPlaceId] = useState<number>(0);
  const [placeList, setPlaceList] = useState<PlaceListApiRes[] | undefined>();

  useEffect(() => {
    async function getData() {
      const data = await placeListApi();
      console.log(data);
      setPlaceList(data.data);
    }
    getData();
  }, []);

  return (
    <>
      <Header isMyPage></Header>
      <main>
        <section className="h-[calc(100vh-80px-156px)]">
          <MapContainer
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
