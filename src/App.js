import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { StylesProvider } from '@mui/styles'

function App() {
  return (
    <StylesProvider>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </StylesProvider>
  );
}
export default App;
