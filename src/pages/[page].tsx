import ContentSection from "@/components/domain/place/ContentSection";
import ControlStampModal from "@/components/domain/place/ControlStampModal";
import ImageSection from "@/components/domain/place/ImageSection";
import Header from "@/components/layout/Header";
import { useState } from "react";

export default function DetailPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header isMyPage isBack></Header>
      <main className="space-y-7 px-12 py-12 text-sm">
        <ImageSection setModalOpen={() => setIsOpen(true)}></ImageSection>
        <ContentSection></ContentSection>
      </main>
      <ControlStampModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      ></ControlStampModal>
    </>
  );
}
