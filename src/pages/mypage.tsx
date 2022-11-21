import myPageApi, {
  BadgeListAndCount,
  StampListAndCount,
} from "@/api/myPageApi";
import BookBody from "@/components/domain/mypage/BookBody";
import BookHeader from "@/components/domain/mypage/BookHeader";
import Header from "@/components/layout/Header";
import { useEffect, useState } from "react";

export default function MyPage() {
  const [nowPage, setNowPage] = useState<"stamp" | "badge">("stamp");
  const [stampListAndCount, setStampListAndCount] = useState<
    StampListAndCount | undefined
  >();
  const [badgeListAndCount, setBadgeListAndCount] = useState<
    BadgeListAndCount | undefined
  >();

  const togglePage = () => {
    if (nowPage == "stamp") setNowPage("badge");
    else setNowPage("stamp");
  };

  useEffect(() => {
    async function getMyPageData() {
      const data = await myPageApi();
      setStampListAndCount({
        stampCnt: data.data.stampCnt,
        stampList: data.data.stampList,
      });
      setBadgeListAndCount({
        badgeCnt: data.data.badgeCnt,
        badgeList: data.data.badgeList,
      });
    }
    getMyPageData();
  }, []);

  return (
    <>
      <Header isBack></Header>
      <main className="h-fit w-full py-4 px-7">
        <div className="overflow-hidden rounded-xl shadow-lg">
          <BookHeader
            nowPage={nowPage}
            togglePage={togglePage}
            stampCount={stampListAndCount?.stampCnt}
            badgeCount={badgeListAndCount?.badgeCnt}
          ></BookHeader>
          <BookBody
            badgeList={badgeListAndCount?.badgeList}
            nowPage={nowPage}
            stampList={stampListAndCount?.stampList}
          ></BookBody>
        </div>
      </main>
    </>
  );
}
