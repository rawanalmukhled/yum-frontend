import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      {/* <Route path="/" Component={}/>  */}
    </Routes>
  );
}

export default App;
