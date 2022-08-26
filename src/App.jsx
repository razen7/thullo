import { Routes, Route } from "react-router-dom";
import Board from "./components/board/Board";
import SignIn from "./components/login/SignIn";
import SignUp from "./components/login/SignUp";
function App() {
  return (
    <div className="main-container">
      <Routes>
        <Route index element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </div>
  );
}

export default App;
