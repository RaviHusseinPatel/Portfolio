import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials.jsx";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";




const App = () => {
    return (
        <>
      <div className="App">
       <Header/>
       <Nav/>
       <About/>
       <Experience/>
       <Portfolio/>
       <Testimonials/>
       <Contact/>
       <Footer/>
     
       
       
      </div>
      </>
    )
  };
  
  export default App;