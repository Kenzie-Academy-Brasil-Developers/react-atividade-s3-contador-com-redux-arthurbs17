import { useDispatch } from "react-redux";
import { addNumber, subNumber } from "../../modules/counter/action";
import { Container } from "./styles";

const Counter = () => {
  const dispatch = useDispatch();

  const handleAddNumber = () => {
    dispatch(addNumber(1));
  };
  const handleSubNumber = () => {
    dispatch(subNumber(1));
  };

  return (
    <Container>
      <button onClick={handleSubNumber}>-</button>
      <button onClick={handleAddNumber}>+</button>
    </Container>
  );
};

export default Counter;
