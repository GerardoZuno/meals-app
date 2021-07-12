import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Categories} from './components/Categories/Categories'
import {HomePage} from './components/HomePage/HomePage'
import {RandomMeal} from './components/RandomMeal/RandomMeal'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/categories" component={Categories}></Route>
          <Route exact path="/random" component={RandomMeal}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
