const Heading = (props) => {
  const { children } = props;
  return <h1 className="py-2 text-3xl font-bold">{children}</h1>;
};

export default Heading;
