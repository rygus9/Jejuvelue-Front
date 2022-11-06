import CareRightIcon from "@/components/Icon/CareRightIcon";

const PlaceDetail = () => {
  return (
    <div className="relative flex h-full w-full items-stretch space-x-3 px-7 py-9">
      <figure className="aspect-square flex-shrink-0 overflow-hidden rounded-lg">
        <img
          src="/images/mock/cat1.webp"
          alt="유적지 사진"
          className="h-full w-full object-cover"
        ></img>
      </figure>
      <p className="flex-1 rounded-lg bg-personalBlack p-4 text-white">
        유적지 명, 유적지 한 줄 소개
      </p>
      <nav className="absolute right-0 top-1/2 flex -translate-y-1/2 items-center">
        <CareRightIcon width="32" height="32"></CareRightIcon>
      </nav>
    </div>
  );
};

export default PlaceDetail;
