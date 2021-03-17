import React, { useState, useEffect } from 'react';
import GlobalStyles from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Homepage, Checkout } from './pages/index';
import { Navbar, Footer } from './components/index';
import { ScrollToTop } from './helpers/index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState(60);

  useEffect(() => {
    const timer =
      timerSeconds > 0 &&
      setInterval(() => setTimerSeconds(timerSeconds - 1), 1000);
    return () => clearInterval(timer);
  }, []);

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

export const notify = (bank, timerSeconds) => {
  toast.dark(`Please transfer money to ${bank} within ${timerSeconds}`, {
    position: 'top-center',
    autoClose: 60000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });
};
