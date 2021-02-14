import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Pages/HomePage/Home';
import Footer from './Components/Pages/Footer/Footer';
import Services from './Components/Pages/Services/Services'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/> 
        <Route path="/services" exact component={Services}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
