import { Toaster } from "react-hot-toast";
import Header from "./components/header";
import Hero from "./components/Hero";
import Seciton from "./components/Seciton";
import Menu from "./components/Menu";
import Main from "./components/Main";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
    <Header/>
    <Hero/> 
    <Seciton/>
    <Menu/>
    <Main/>
    <ContactForm/>
    <Footer/>
    </>
  );
};

export default App;
