import Image from "next/image";

export default function Card({imgPath, title, description, alt}) {
  return (
    <div className="h-80 w-60 rounded-[10px] bg-lightGreen shadow-md">
      <div className="h-[45%] w-[100%] relative rounded-t-[10px] overflow-hidden">
        <Image
          src={imgPath}
          alt={alt}
          width={500}
          height={400}
          className="rounded-t-[10px]"
        />
        <div className="w-full h-full absolute top-0 left-0 z-10 from-lightGreen to-[#80ffc033] bg-gradient-to-t"></div>
      </div>

      <div className="px-5 flex flex-col gap-5 items-center text-center justify-center">
        <h3 className="text-[#00000099] text-xl font-bold">{title}</h3>
        <p className="text-darkGreen text-md">{description}</p>
      </div>
    </div>
  );
}
