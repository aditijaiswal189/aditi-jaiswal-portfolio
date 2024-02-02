import About from "./Components/About";
import AboutMe from "./Components/AboutMe";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
import GetToKnow from "./Components/GetToKnow";
import Header from "./Components/Header";
import MySkills from "./Components/MySkills";
import Projects from "./Components/Projects";
import Project1 from "./Components/Project1";
import Project2 from "./Components/Project2";
import Project3 from "./Components/Project3";
import Project4 from "./Components/Project4";


function App() {
  return (
    <div className="lg:grid lg:grid-cols-2 ">
    <div className="lg:col-span-2">
        <Header/>
      </div>
    <div className="lg:col-span-2">
      <About /></div>
    <div className="lg:col-span-2">
      <AboutMe /></div>
      <GetToKnow />
      <MySkills />
    <div className="lg:col-span-2">
      <Projects /></div>
    <div className="lg:col-span-2">
      <Project1 /></div>
    <div className="lg:col-span-2">
      <Project2 /></div>
    <div className="lg:col-span-2">
      <Project3 /></div>
    <div className="lg:col-span-2">
      <Project4 /></div>
    <div className="lg:col-span-2">
      <ContactForm /></div>
    <div className="lg:col-span-2">
      <Footer /></div>
     
    </div>
  );
}

export default App;
