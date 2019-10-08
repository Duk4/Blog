import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Blog from './components/main/Blog';
import About from './components/main/About';
import LogIn from './components/login/LogIn';
import Post from './components/posts/Post';
import NewPost from './components/posts/NewPost';
import EditPost from './components/posts/EditPost';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Blog} />
          <Route path="/about" component={About} />
          <Route path="/login" component={LogIn} />
          <Route path="/post/:id" component={Post} />
          <Route path="/create" component={NewPost} />
          <Route path="/edit" component={EditPost} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;