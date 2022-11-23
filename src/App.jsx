import OurServices from './components/OurServices';
import OurTeam from './components/OurTeam';
import Hero from './components/HeroList';
import OurWork from './components/OurWork';
import ContactUs from './components/ContactUs';
import './App.css';
import Button from './components/UI/Button';

function App() {
  return (
    <div className='App'>
      <OurServices />
      <OurTeam />
      <Hero />
      <Button title='increment'>Subscribe here</Button>
      <button>Pavadinimas</button>
      <OurWork />
      <ContactUs />
    </div>
  );
}

export default App;
