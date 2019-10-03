import React from 'react';
import Header from './components/header/Header';
import Guest from './components/navbar/Guest';
import Footer from './components/footer/Footer';
import EditPost from './components/posts/EditPost';


function App() {
  return (
    <div>
      <Header />
      <Guest />
      <EditPost />
      <Footer />
    </div>
  );
}

export default App;