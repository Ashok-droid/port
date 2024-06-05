import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import faqData from './faqData';

function App() {
  const faqElements = faqData.map(data => {
    return (
      <Faq 
        key = {data.key}
        question = {data.question}
        answer = {data.answer}
      />
    )
  })

  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <h3 className='leading-10 mx-auto max-w-2xl text-2xl text-white font-medium mb-10 pl-4'>Discover My Expertise: FAQs on Projects, Optimization, and Communication</h3>
      {faqElements}
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default App;
