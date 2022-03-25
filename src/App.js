import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";
import MiProvider from "./components/cartContext";

const App = () => { 
  return (
    <MiProvider>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
        <Footer/>
        <ToastContainer />
    </MiProvider>
    )
}

export default App