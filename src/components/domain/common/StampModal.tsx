import Modal from "@/components/common/Modal";
import OptImg from "@/components/common/OptImg";
import { XMarkIcon } from "@heroicons/react/20/solid";

interface StampModalParams {
  imgSrc: string;
  description: string;
  isOpen: boolean;
  setIsOpen: (x: boolean) => void;
  title?: string;
  controlPanel?: JSX.Element;
}

export default function StampModal({
  imgSrc,
  description,
  isOpen,
  setIsOpen,
  title,
  controlPanel,
}: StampModalParams) {
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
          <OptImg src={imgSrc} alt="스탬프 사진"></OptImg>
        </figure>
        {title && <h3 className="text-xl font-bold">{title}</h3>}
        <p>{description}</p>
        {controlPanel}
      </div>
    </Modal>
  );
}
