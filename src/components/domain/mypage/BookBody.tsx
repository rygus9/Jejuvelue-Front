import { BadgeInfo, StampInfo } from "@/api/myPageApi";
import { cls } from "@/utils/cls";
import BadgeButton from "./BadgeButton";
import StampButton from "./StampButton";
import { range } from "rambda";
import DefaultImg from "@/components/common/DefaultImg";
import DotLoading from "@/components/common/DotLoading";

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
  return (
    <>
      {stampList && badgeList ? (
        <section
          className={cls(
            "grid pt-9 pb-11",
            nowPage == "stamp" ? "grid-cols-3 gap-1" : "grid-cols-1 gap-5 px-5"
          )}
        >
          {nowPage === "stamp"
            ? stampList &&
              stampList.map((stamp) => (
                <StampButton key={stamp.placeId} stamp={stamp}></StampButton>
              ))
            : badgeList &&
              badgeList.map((badge) => (
                <BadgeButton key={badge.badgeId} badge={badge}></BadgeButton>
              ))}
        </section>
      ) : (
        <LoadingView></LoadingView>
      )}
    </>
  );
}

function LoadingView() {
  return (
    <>
      <section className={cls("grid grid-cols-3 gap-1 pt-9 ")}>
        {range(0, 9).map((elem) => (
          <figure key={elem} className="overflow-hidden rounded-full">
            <DefaultImg></DefaultImg>
          </figure>
        ))}
      </section>
      <div className="py-8">
        <DotLoading></DotLoading>
      </div>
    </>
  );
}
