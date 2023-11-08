import Image from "next/image";

const Picture = ({ src, index, subtitle }) => {
  return (
    <Image
      src={src}
      priority={index === 0} //https://www.udemy.com/course/nextjs-by-example/learn/lecture/38769636#notes
      width="640"
      height="360"
      alt={subtitle}
      className="w-auto sm:w-5/6 mx-auto sm:mx-0 border-0 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none "
    />
  );
};

export default Picture;
