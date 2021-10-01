import { useSelector } from "react-redux";
import { Container } from "./styles";

const Display = () => {
  const { number } = useSelector((state) => state);
  return <Container>{number}</Container>;
};

export default Display;
