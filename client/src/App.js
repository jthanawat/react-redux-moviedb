import React from 'react';
import GlobalStyles from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Homepage, Checkout } from './pages/index';
import { Navbar, Footer } from './components/index';
import { ScrollToTop } from './helpers/index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <ScrollToTop />
      <ToastContainer
        position="top-center"
        autoClose={60000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

export const notify = (bank, minutes, seconds) => {
  toast.dark(`Please transfer money to ${bank} within ${minutes}:${seconds}`, {
    position: 'top-center',
    autoClose: 60000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });
};
