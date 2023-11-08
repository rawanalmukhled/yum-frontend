<<<<<<< HEAD
function App() {
  return <div></div>;
=======
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
>>>>>>> 5658ea69c411d610e17a4dc98a3ed470612c6a0b
}

export default App;
