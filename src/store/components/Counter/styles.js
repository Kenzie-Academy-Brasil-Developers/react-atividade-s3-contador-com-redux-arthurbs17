import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 80px;
  background-color: #8b0000;
  border: 2px solid #fff;
  border-radius: 5px;
  button {
    padding: 5px;
    background-color: #00008b;
    border-radius: 5px;
    border-color: #fff;
    color: #fff;
    width: 50px;
    margin: 5px;
    font-size: 18px;
    :hover {
      background-color: #fff;
      color: #00008b;
    }
  }
`;
