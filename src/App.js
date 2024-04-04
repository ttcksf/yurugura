import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} exact element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
