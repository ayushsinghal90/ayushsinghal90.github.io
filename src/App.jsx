import "./App.css";
import Footer from "./componenets/Footer/Footer";
import Header from "./componenets/Header/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
