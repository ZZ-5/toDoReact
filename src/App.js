import "./components/styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter Routes={Routes} Route={Route} />
    </BrowserRouter>
  )
}

export default App;
