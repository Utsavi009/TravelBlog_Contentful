import React, {useState, useEffect} from 'react';
import './App.css';
import {client} from './client';
import NavBar from './components/NavBar';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import America from './components/America';
import Africa from './components/Africa';
import Europe from './components/Europe';
import Asia from './components/Asia';
import JumboImage from './components/JumboImage';
import AboutUs from './components/AboutUs';




function App() {

  const [articles, setArticles] = useState([]);
  
  console.log(articles);

  useEffect(() => {
    client.getEntries({
    content_type : 'blogPost'
    })
    .then(response => setArticles(response.items))
    .catch(error => console.log(error))
  }, [])

  //const handlePageScroll = () => titleRef.current.scrollIntoView({ behavior: 'smooth' });

const handlePageScroll = () => {window.scrollTo(0, 0)};

  return (
    <div >
      <Router>
        <NavBar handlePageScroll={handlePageScroll}/>

    
        <Switch>
          <Route exact path='/'>
          <JumboImage />
            <Blogs blogs={articles} />
          </Route>
          <Route exact path='/america'>
            <America  americaBlogs={articles}/>
          </Route>
          <Route exact path='/africa'>
            <Africa africaBlogs={articles}/>
          </Route>
          <Route exact path='/asia'>
            <Asia  asiaBlogs={articles}/>
          </Route>
          <Route exact path='/europe'>
            <Europe europeBlogs={articles} />
          </Route>
          <Route exact path='/aboutus'>
            <AboutUs />
          </Route>
        </Switch>
      </Router>
      
      <Footer handlePageScroll={handlePageScroll}/>

    </div>
  );
}

export default App;


