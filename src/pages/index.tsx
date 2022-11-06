import placeListApi from "@/api/placeListApi";
import MapContainer from "@/components/common/MapContainer";
import PlaceDetail from "@/components/domain/main/PlaceDetail";
import Header from "@/components/layout/Header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [placeId, setPlaceId] = useState<number>(0);
  const [placeList, setPlaceList] = useState<any[]>();

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
          <MapContainer></MapContainer>
        </section>
        <section className="fixed bottom-0 z-10 h-44 w-full rounded-t-2xl bg-white">
          <PlaceDetail></PlaceDetail>
        </section>
      </main>
    </>
  );
}
