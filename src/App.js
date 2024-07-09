import { Outlet, createBrowserRouter } from 'react-router-dom';
import AddTicket from './components/AddTicket';
import BreadCrump from './components/BreadCrump';
import DashBoard from './components/DashBoard';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TicketList from './components/TicketList';
import Home from './pages/Home';
import Ticket from './pages/Ticket';
import Error from './components/Error';
import PrivateRoute from './Routes/PrivateRoute';
import Register from './pages/Register';



export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Home />
        )
      },
      {
        path: "/DashBoard",
        element: (
          <PrivateRoute>
            <DashBoard />
          </PrivateRoute>
        )
      },
      {
        path: "/tickets",
        element: (<PrivateRoute>
          <TicketList />
        </PrivateRoute>)
      },
      {
        path: "/add-ticket",
        element: (<PrivateRoute>
          <AddTicket />
        </PrivateRoute>)
      },
      {
        path: "/ticket/:tId",
        element: (<PrivateRoute>
          <Ticket />
        </PrivateRoute>)
      },
      {
        path: "/registration",
        element: (
          <Register />
        )
      },
    ]
  }
])

function App() {
  return (
    <div className=''>
      <Navbar />
      <Outlet />
      <Footer />

    </div>
  );
}

export default App;
