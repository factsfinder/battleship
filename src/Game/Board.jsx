import { useContext } from "react";
import styled from "styled-components";

import { GameContext, GAME_ACTION_TYPES } from "./context";
import { Row } from "./styles";

const GameBoardContainer = styled(Row)`
  width: 400px;
  height: 400px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 44px;
`;

const Square = styled.div`
  width: 35px;
  height: 35px;
  border: 1px solid #707689;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.1s ease;
`;

const GameSquare = styled(Square)`
  cursor: pointer;
  &:hover {
    border: 1px solid red;
  }
`;

function Board({ player }) {
  const { state, dispatch } = useContext(GameContext);
  const { shipsArranged, bombedCoordinates } = state[player];
  const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const alphabetSquares = alphabets.map((alpha) => (
    <Square key={alpha}>{alpha}</Square>
  ));
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const numberSqaures = numbers.map((n) => <Square key={n}>{n}</Square>);
  const gameCoordinates = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < alphabets.length; j++) {
      gameCoordinates.push(`${alphabets[j]}${numbers[i]}`);
    }
  }

  const GameBoard = () => {
    return gameCoordinates.map((coord) => {
      const isBombed = bombedCoordinates.includes(coord);
      const handleSquareClick = () => {
        const actionType = shipsArranged
          ? GAME_ACTION_TYPES.PLACE_BOMB
          : GAME_ACTION_TYPES.ARRANGE_SHIP;
        dispatch({ type: actionType, player, coord });
      };
      return (
        <GameSquare key={coord} onClick={handleSquareClick}>
          {shipsArranged && isBombed && <p>X</p>}
        </GameSquare>
      );
    });
  };

  return (
    <Col>
      <h2>{player}</h2>
      <Row>
        <Col>{numberSqaures}</Col>
        <GameBoardContainer>
          {alphabetSquares}
          <GameBoard />
        </GameBoardContainer>
      </Row>
    </Col>
  );
}

export default Board;
