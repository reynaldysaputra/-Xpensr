import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import AddExpense from './pages/add-expense/expense';
import HomePage from './pages/home/home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/add-expense" element={<AddExpense/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
