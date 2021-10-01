import { useDispatch } from "react-redux";
import { addNumber, subNumber } from "../../modules/counter/action";

const Counter = () => {
  const dispatch = useDispatch();

  const handleAddNumber = () => {
    dispatch(addNumber(1));
  };
  const handleSubNumber = () => {
    dispatch(subNumber(1));
  };

  return (
    <div>
      <button onClick={handleSubNumber}>-</button>
      <button onClick={handleAddNumber}>+</button>
    </div>
  );
};

export default Counter;
