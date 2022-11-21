import Carousel from "@/components/common/Carousel";
import OptImg from "@/components/common/OptImg";
import StampModal from "@/components/domain/common/StampModal";
import Header from "@/components/layout/Header";
import { useRouter } from "next/router";
import { useState } from "react";

export default function DetailPage() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header isMyPage isBack></Header>
      <main className="space-y-7 px-12 py-12 text-sm">
        <section className="relative aspect-square w-full">
          <Carousel
            imageURLs={["/images/mock/cat1.webp", "/images/mock/cat2.webp"]}
          ></Carousel>
          <figure
            className="absolute -bottom-6 -right-8 z-40"
            onClick={() => setIsOpen(true)}
          >
            <OptImg
              src="/images/mock/stamp_off_001.png"
              alt="stamp 사진"
            ></OptImg>
          </figure>
        </section>
        <section className="space-y-3">
          <h2 className="w-full rounded-md border border-gray-300 px-4 py-1.5 text-center">
            고양이는 귀엽다
          </h2>
          <p className="w-full rounded-md border border-gray-300 px-4 py-1.5 text-center">
            주소를 알앗으면 좋겠어
          </p>
        </section>
        <p className="w-full rounded-md border border-gray-300 px-4 py-3 text-center">
          고양이는 귀엽습니다. 고양이는 정말 귀엽습니다. 그런 고양이도
          야생동물입니다. 저번에 학교 인기 탑 고양이가 까치를 사냥해려 했던 거
          보면 섬뜩하면서도 귀엽습니다. 역시 귀엽습니다.
        </p>
      </main>
      <StampModal
        imgSrc="/images/mock/stamp_off_001.png"
        description="고양이는 정말로 귀엽습니다 ㅎㅎㅎ 고양이는 정말로 귀엽습니다 ㅎㅎㅎ 고양이는 정말로 귀엽습니다 ㅎㅎㅎ"
        title="고양이굿굿"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      ></StampModal>
    </>
  );
}
