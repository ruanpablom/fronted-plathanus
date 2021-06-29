import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PageLayout from './pages/PageLayout';
import Routes from './routes';

import './App.css';
toast.configure();

function App() {
  return(
    <PageLayout>
      <ToastContainer />
      <Routes />
    </PageLayout>
  )
}

export default App;
