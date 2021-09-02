import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Search from "./components/Search";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import Counter from "./components/Counter";



function App() {
  

  
const [data,setData]=useState([0])


  

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=2a3251efdb517a29d300c0dcb43f9110")
    .then(response=>response.json())
    .then(data=>setData(data.results))
  }, []); //useeffect artık sadece başlangıçta çalışacak//içine state eklersek o değiştiğinde tekrar çalışacak


  const searchMovie=(term)=>{
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=2a3251efdb517a29d300c0dcb43f9110&query=${term}`)
    .then(response=>response.json())
    .then(data=>setData(data.results))

  }

  return (
    <Router>
      <Route exact path="/">
        <Navbar />
        <main>
          <Header />
          <div className="album py-5 bg-light">
            <div className="container">
              <Counter/>
              <Search searchMovie={searchMovie} />

              <CardList movies={data} />
            </div>
          </div>
        </main>
        <Footer/>
      </Route>
    </Router>
  );
}

export default App;
