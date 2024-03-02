import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Artist from "./components/Artist";
import ArtistMore from "./components/ArtistMore";
import "./App.css";
function App() {
  return (
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Artist/>} />
        <Route path="/artistmore/:id" element={<ArtistMore/>} />
      </Routes> 
  );
}

export default App;
