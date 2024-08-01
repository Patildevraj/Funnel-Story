import './App.css';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import MarqueSection from './components/MarqueSection/MarqueSection';
import MoreDataSection from './components/MoreDataSection/MoreDataSection';
import SolutionsSection from './components/SolutionsSection/SolutionsSection';
import BigSection from './components/BigSection/BigSection';
import Footer from './components/Footer/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';


import trust1 from './Assets/trust1.png';
import trust2 from './Assets/trust2.png';
import trust3 from './Assets/trust3.png';
import trust4 from './Assets/trust4.png';
import trust5 from './Assets/trust5.png';
import trust6 from './Assets/trust6.png';

function App() {
  const logos = [
    trust1,
    trust2,
    trust3,
    trust4,
    trust5,
    trust6,
    trust1,
    trust2,
    trust3,
    trust4,
    trust5,
    trust6,
    trust1,
    trust2,
    trust3,
    trust4,
    trust5,
    trust6,
    trust1,
    trust2,
    trust3,
    trust4,
    trust5,
    trust6,
  ];

  return (
    <div className="App">
      <Header />
      <HeroSection />
      <MarqueSection logos={logos} />
      <MoreDataSection />
      <SolutionsSection />
      <BigSection />
      <Footer />
    </div>
  );
}

export default App;
