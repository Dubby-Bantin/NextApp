import Modal from "@/components/modal";
import wonders, { WonderImage } from "../../../wonders";
import Image from "next/image";
const PhotoModal = ({ params: { id } }: { params: { id: string } }) => {
  const photo = wonders.find((wonder) => wonder.id === id) as WonderImage;
  return (
    <Modal>
      <Image
        src={photo?.src}
        alt={photo?.name}
        className="h-[20rem] rounded-t-md object-cover"
      />
      <div className="bg-white rounded-b-md p-4">
        <h2 className="text-xl font-semibold">{photo?.name}</h2>
        <h3>{photo?.photographer}</h3>
        <h3>{photo?.location}</h3>
      </div>
    </Modal>
  );
};

export default PhotoModal;
