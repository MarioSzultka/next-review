const Image = ({ src, css }) => {
  return (
    <img
      src={src}
      alt=""
      className="w-auto sm:w-5/6 mx-auto sm:mx-0 border-0 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none "
    />
  );
};

export default Image;
