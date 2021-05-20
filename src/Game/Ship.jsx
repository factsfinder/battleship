import { useState } from "react";
import styled from "styled-components";

const ShipContainer = styled.div`
  width: ${({ numOfSquares, isVertical }) =>
    isVertical ? "35px" : `${35 * numOfSquares}px`};
  height: ${({ numOfSquares, isVertical }) =>
    !isVertical ? "35px" : `${35 * numOfSquares}px`};
  background-color: ${({ isSelected }) => (isSelected ? "#364fc7" : "#5c7cfa")};
  margin-right: 30px;
`;

const Input = styled.input`
  width: 35px;
  height: 35px;
  margin-right: 30px;
`;

function Ship() {
  const [isSelected, setIsSelected] = useState(false);
  const [isVertical, setIsVertical] = useState(false);
  const [cols, setCols] = useState(1);
  const handleChange = (e) => {
    setCols(e.target.value);
  };
  const toggleSelected = () => {
    setIsSelected((prev) => !prev);
  };

  const toggleVertical = () => {
    setIsVertical((prev) => !prev);
  };
  return (
    <div style={{ marginRight: "20px" }}>
      <p>Build your ship here</p>
      <div style={{ display: "flex" }}>
        <Input
          type="number"
          value={cols}
          onChange={handleChange}
          min={1}
          max={5}
        />
        <ShipContainer
          numOfSquares={cols}
          onClick={toggleSelected}
          isSelected={isSelected}
          isVertical={isVertical}
        />
        <div onClick={toggleVertical}>
          {isVertical ? "horizontal" : "vertical"}
        </div>
      </div>
    </div>
  );
}

export default Ship;
