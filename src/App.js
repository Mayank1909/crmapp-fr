import AddTicket from './components/AddTicket';
import BreadCrump from './components/BreadCrump';
import DashBoard from './components/DashBoard';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TicketList from './components/TicketList';
import Home from './pages/Home';
import Ticket from './pages/Ticket';



function App() {
  return (
    <div className=''>
      <Navbar />
      {/* <Home /> */}
      {/* <BreadCrump /> */}
      <DashBoard />
      {/* <AddTicket /> */}
      {/* <TicketList /> */}
      {/* <Ticket /> */}
      <Footer />
    </div>
  );
}

export default App;
