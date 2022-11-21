import DefaultImg from "@/components/common/DefaultImg";
import OptImg from "@/components/common/OptImg";
import CareRightIcon from "@/components/Icon/CareRightIcon";
import { useRouter } from "next/router";

interface PlaceDetailParams {
  placeId?: number;
  stampImageUrl?: string;
  placeImageUrl?: string;
  shortDescription?: string;
}

const PlaceDetail = ({
  placeId,
  stampImageUrl,
  placeImageUrl,
  shortDescription,
}: PlaceDetailParams) => {
  const router = useRouter();

  const onDetailClick = () => {
    if (placeId != 0) router.push(`/${placeId}`);
  };

  return (
    <div
      className="relative flex h-full w-full items-stretch space-x-3 px-7 py-9"
      onClick={onDetailClick}
    >
      <figure className="relative aspect-square flex-shrink-0 rounded-lg bg-gray-200">
        {placeImageUrl ? (
          <figure className="z-20 h-full w-full overflow-hidden rounded-md object-cover">
            <OptImg src={placeImageUrl} alt="유적지 사진"></OptImg>
          </figure>
        ) : (
          <DefaultImg />
        )}
        {stampImageUrl && (
          <figure className="absolute -bottom-3 -right-3 h-12 w-12 overflow-hidden rounded-full">
            <OptImg src={stampImageUrl} alt="스탬프 사진"></OptImg>
          </figure>
        )}
      </figure>
      <p className="flex flex-1 flex-col items-center justify-center rounded-lg bg-personalBlack p-4 text-center text-white">
        {shortDescription || (
          <>
            <span>지도에서</span>
            <span>유적지를 선택해주세요.</span>
          </>
        )}
      </p>
      <nav className="absolute right-0 top-1/2 flex -translate-y-1/2 items-center">
        {placeId && <CareRightIcon width="32" height="32"></CareRightIcon>}
      </nav>
    </div>
  );
};

export default PlaceDetail;
