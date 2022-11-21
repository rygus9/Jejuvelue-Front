import { BadgeInfo, StampInfo } from "@/api/myPageApi";
import OptImg from "@/components/common/OptImg";
import { cls } from "@/utils/cls";
import { useState } from "react";
import StampModal from "../common/StampModal";

interface BookBodyParams {
  stampList?: StampInfo[];
  badgeList?: BadgeInfo[];
  nowPage: "stamp" | "badge";
}

export default function BookBody({
  stampList,
  badgeList,
  nowPage,
}: BookBodyParams) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section
        className={cls(
          "grid pt-9 pb-11",
          nowPage == "stamp" ? "grid-cols-3 gap-1" : "grid-cols-1 gap-5 px-5"
        )}
      >
        {nowPage === "stamp"
          ? stampList &&
            stampList.map((stamp) => (
              <figure
                key={stamp.placeId}
                className="aspect-square w-full overflow-hidden rounded-full"
              >
                <OptImg src={stamp.stampImageUrl} alt={stamp.name}></OptImg>
              </figure>
            ))
          : badgeList &&
            badgeList.map((badge) => (
              <figure
                key={badge.badgeId}
                className="aspect-square w-full overflow-hidden rounded-full"
              >
                <OptImg
                  src={badge.badgeImageUrl}
                  alt={badge.description}
                ></OptImg>
              </figure>
            ))}
      </section>
    </>
  );
}
