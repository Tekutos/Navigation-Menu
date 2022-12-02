import { Route, Routes } from "react-router-dom";
import "./App.scss";
import MainPage from "./pages/MainPage/MainPage";
import Nav from "./components/Navigation/Nav";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/nav1" element={<Nav />}></Route>
    </Routes>
  );
}

export default App;
