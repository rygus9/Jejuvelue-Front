import withCurrentPlaceInfo from "@/recoil/place/withCurrentPlaceInfo";
import { useRecoilValue } from "recoil";

const contentStyle =
  "w-full rounded-md border border-gray-300 px-4 py-1.5 text-center";

export default function ContentSection() {
  const currentPlaceInfo = useRecoilValue(withCurrentPlaceInfo);

  return (
    <section className="space-y-3">
      <h2 className={contentStyle}>{currentPlaceInfo.name}</h2>
      <p className={contentStyle}>{currentPlaceInfo.address}</p>
      <p className={contentStyle}>{currentPlaceInfo.description}</p>
    </section>
  );
}
