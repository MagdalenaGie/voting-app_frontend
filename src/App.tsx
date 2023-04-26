import { Player } from 'planning-poker-components-library';
import { Route, Routes } from 'react-router';
import CreateNewGame from './components/CreateNewGame/CreateNewGame';
import GameTable from './components/GameTable/GameTable';
import JoinGame from './components/JoinGame/JoinGame';
import { Layout } from './components/Layout/Layout';

function App() {
  let player: Player = {
    name: "TestPlayer",
    guid: "sdsdfsd",
    isSpectator:false,
    avatarId:3
  }

  return (
    <Layout player={player} inGame={true} gameName={"test game"} gameGuid={""}>
      <Routes>
        <Route path="/" element={<CreateNewGame />} />
        <Route path="/game/:gameId" element={<GameTable />} />
        <Route path="/game/:gameId/join" element={<JoinGame />} />
      </Routes>
    </Layout>
    
  );
}

export default App;
