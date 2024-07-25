import wonders, { WonderImage } from "../wonders";
import Image from "next/image";

const PhotoPage = ({ params: { id } }: { params: { id: string } }) => {
  const photo = wonders.find((wonder) => wonder.id === id) as WonderImage;
  return (
    <div className="my-10">
      <div className="w-1/2 mx-auto">
        <div>
          <h1 className="text-center text-3xl font-bold my-4">{photo?.name}</h1>
        </div>
        <Image
          className="w-full object-cover aspect-square"
          src={photo?.src}
          alt={photo?.name}
        />
        <div className="bg-white py-4">
          <h3>{photo?.photographer}</h3>
          <h3>{photo?.location}</h3>
        </div>
      </div>
    </div>
  );
};

export default PhotoPage;
