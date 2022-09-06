import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/header";
import Profile from "./pages/Home";
import Repositories from "./pages/Repositories";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Profile />}></Route>
        <Route path="/repos" element={<Repositories />} />
      </Routes>
    </>
  );
}

export default App;
