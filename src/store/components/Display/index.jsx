import { useSelector } from "react-redux";

const Display = () => {
  const { number } = useSelector((state) => state);
  return <div>{number}</div>;
};

export default Display;
