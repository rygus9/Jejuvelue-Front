import { BadgeInfo } from "@/api/myPageApi";
import OptImg from "@/components/common/OptImg";
import { useState } from "react";
import StampModal from "../common/StampModal";

export default function BadgeButton({ badge }: { badge: BadgeInfo }) {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => setIsOpen((elem) => !elem);

  return (
    <>
      <figure
        key={badge.badgeId}
        className="aspect-square w-full overflow-hidden rounded-full"
        onClick={onClick}
      >
        <OptImg src={badge.badgeImageUrl} alt={badge.description}></OptImg>
      </figure>
      <StampModal
        description={badge.description}
        imgSrc={badge.badgeImageUrl}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      ></StampModal>
    </>
  );
}
