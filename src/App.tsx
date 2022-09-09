import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/header";
import Profile from "./pages/Home";
import RepositoriesPage from "./pages/RepositoriesPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Profile />}></Route>
        <Route path="/repos" element={<RepositoriesPage />} />
        <Route path="/repos/:id" element={<h1>teste</h1>} />
      </Routes>
    </>
  );
}

export default App;
