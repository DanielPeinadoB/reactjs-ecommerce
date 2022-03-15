import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (
      <>
        <Header/>
        <Main/>
        <Footer/>
        <ToastContainer/>
      </>
    )
}

export default App