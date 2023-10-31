const Heading = (props) => {
  const { children } = props;
  return (
    <h1 className={`py-2 text-2xl font-bold font-orbitron`}>{children}</h1>
  );
};

export default Heading;
