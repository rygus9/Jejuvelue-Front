import { StampInfo } from "@/api/myPageApi";
import OptImg from "@/components/common/OptImg";
import { useState } from "react";
import StampModal from "../common/StampModal";

export default function StampButton({ stamp }: { stamp: StampInfo }) {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => setIsOpen((elem) => !elem);

  return (
    <>
      <figure
        key={stamp.placeId}
        className="aspect-square w-full overflow-hidden rounded-full"
        onClick={onClick}
      >
        <OptImg src={stamp.stampImageUrl} alt={stamp.name}></OptImg>
      </figure>
      <StampModal
        description={stamp.shortDescription}
        imgSrc={stamp.stampImageUrl}
        title={stamp.name}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      ></StampModal>
    </>
  );
}
