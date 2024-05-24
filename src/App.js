import BreadCrump from './components/BreadCrump';
import DashBoard from './components/DashBoard';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';


function App() {
  return (
    <div className=''>
      <Navbar />
      {/* <Home /> */}
      {/* <BreadCrump /> */}
      <DashBoard />
      <Footer />
    </div>
  );
}

export default App;
