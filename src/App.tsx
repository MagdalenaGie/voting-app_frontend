import { Route, Routes } from 'react-router';
import CreateNewGame from './components/CreateNewGame/CreateNewGame';
import GameTable from './components/GameTable/GameTable';
import JoinGame from './components/JoinGame/JoinGame';

function App() {
  return (
    <Routes>
        <Route path="/" element={<CreateNewGame />} />
        <Route path="/game/:gameId" element={<GameTable />} />
        <Route path="/game/:gameId/join" element={<JoinGame />} />
      </Routes>
  );
}

export default App;
