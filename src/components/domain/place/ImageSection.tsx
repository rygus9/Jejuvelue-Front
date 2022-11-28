import Carousel from "@/components/common/Carousel";
import OptImg from "@/components/common/OptImg";
import withCurrentPlaceInfo from "@/recoil/place/withCurrentPlaceInfo";
import { useRecoilValue } from "recoil";

interface ImageSectionParams {
  setModalOpen: () => void;
}

export default function ImageSection({ setModalOpen }: ImageSectionParams) {
  const currentPlaceInfo = useRecoilValue(withCurrentPlaceInfo);

  return (
    <section className="relative aspect-square w-full">
      <Carousel
        imageSrc={currentPlaceInfo.placeImageUrlDtoList.map(
          (elem) => elem.imageUrl
        )}
      ></Carousel>
      <figure
        className="absolute -bottom-6 -right-8 z-40"
        onClick={() => setModalOpen()}
      >
        <OptImg src="/images/mock/stamp_off_001.png" alt="stamp 사진"></OptImg>
      </figure>
    </section>
  );
}
