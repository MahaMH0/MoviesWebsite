
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from './Pages/Contact/contact';
import Aboutus from './Pages/About/Aboutus';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/home';
import Movies from './Pages/Movies/Movies';
import MovieDetails from './Pages/Movies/MovieDetails';
import Login from './Pages/Registrationform/Login';
import Register from './Pages/Registrationform/Register';


function App() {
  return (
    <>
<Router>
<Header />
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/Aboutus" exact component={Aboutus} />
    <Route path="/contact" exact component={Contact} />
    <Route path="/movies" exact component={Movies} />
    <Route path="/details/:id" component={MovieDetails}/>
    <Route path="/Register" component={Register}/>
    <Route path="/Login" component={Login}/>
  </Switch>
</Router>

    </>
  );
}

export default App;
