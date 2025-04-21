import './assets/styles/main.scss';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <section id="header"><Header /></section>
      <section id="projects"><Projects /></section>
      <section id="about"><About /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </>
  );
}

export default App
