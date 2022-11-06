import Modal from "@/components/common/Modal";
import { XMarkIcon } from "@heroicons/react/20/solid";

interface StampModalParams {
  isOpen: boolean;
  setIsOpen: (x: boolean) => void;
}

export default function StampModal({ isOpen, setIsOpen }: StampModalParams) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal closeModal={closeModal} isOpen={isOpen}>
      <div className="relative space-y-3 px-10 py-8">
        <XMarkIcon
          className="absolute right-3 top-3 h-6 w-6"
          onClick={closeModal}
        ></XMarkIcon>
        <figure>
          <img
            src="/images/mock/stamp_off_001.png"
            alt="스탬프 사진"
            className="h-full w-full object-cover"
          ></img>
        </figure>
        <p>고양이는 정말 귀엽습니다. 제 장래 희망은 고양이입니다.</p>
        <button className="rounded-md bg-personalRed bg-opacity-[16%] px-6 py-3 text-personalRed">
          도장 찍기
        </button>
      </div>
    </Modal>
  );
}
