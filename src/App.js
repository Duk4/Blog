import React from 'react';
import Header from './components/header/Header';
import Guest from './components/navbar/Guest';
import Footer from './components/footer/Footer';
import Blog from './components/main/Blog';


function App() {
  return (
    <div>
      <Header />
      <Guest />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
