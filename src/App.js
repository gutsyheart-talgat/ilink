import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { StylesProvider } from '@mui/styles'
import { useState } from "react";

function App() {
  const [scroll, setScroll] = useState(true)
  return (
    <StylesProvider>
      <div className="App">
        <Header />
        <Main scroll={scroll} setScroll={setScroll}/>
        <Footer />
      </div>
    </StylesProvider>
  );
}
export default App;
