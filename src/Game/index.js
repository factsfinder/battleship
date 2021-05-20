import styled from "styled-components";

import { GameProvider } from "./context";
import Board from "./Board";

const GameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

function Game() {
  return (
    <GameContainer>
      <GameProvider>
        <Board player="Player1" />
        {/* <Board player="Player2" /> */}
      </GameProvider>
    </GameContainer>
  );
}

export default Game;
