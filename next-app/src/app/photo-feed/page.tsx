import Image from "next/image";
import wonders from "./wonders";
import Link from "next/link";

const Home = () => {
  return (
    <main>
      <h1 className="text-center text-3xl font-bold my-4">
        New Wonders of the World
      </h1>
      <div className="flex items-center gap-5 justify-center flex-wrap w-full">
        {wonders.map(({ id, src, name }) => (
          <Link key={id} href={`/photo-feed/${id}`}>
            <Image
              src={src}
              alt={name}
              className="w-full object-cover h-[20rem] rounded-md aspect-square"
            />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Home;
