import styled from "styled-components";

import { GameProvider } from "./context";
import Board from "./Board";
import Ship from "./Ship";

const GameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const PlayerBoard = styled.div``;

function Game() {
  return (
    <GameContainer>
      <GameProvider>
        <PlayerBoard>
          <Board player="Player1" />
          <Ship />
        </PlayerBoard>
      </GameProvider>
    </GameContainer>
  );
}

export default Game;
