import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import Blog from "./components/Blog";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Blog />
      <Carousel />
      <Footer />
    </>
  );
}

export default App;
