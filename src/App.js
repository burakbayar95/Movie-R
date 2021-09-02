import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Search from "./components/Search";
import CardList from "./components/CardList";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    //mongo?
  }, []); //useeffect artık sadece başlangıçta çalışacak//içine state eklersek o değiştiğinde tekrar çalışacak

  return (
    <Router>
      <Route exact path="/">
        <Navbar />
        <main>
          <Header />
          <div className="album py-5 bg-light">
            <div className="container">
              <Search />

              <CardList />
            </div>
          </div>
        </main>
        <Footer/>
      </Route>
    </Router>
  );
}

export default App;
