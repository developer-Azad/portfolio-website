import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import AboutMe from './components/Home/AboutMe/AboutMe';
import Navigation from './components/Shared/Navigation/Navigation';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';
import ContactMe from './components/ContactMe/ContactMe';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/aboutme">
        <AboutMe></AboutMe>
        </Route>
      <Route path="/contactme">
        <ContactMe></ContactMe>
        </Route>
      <Route path="/blogs">
        <Blogs></Blogs>
        </Route>
      <Route path="/projectDetails/:projectId">
        <ProjectDetails></ProjectDetails>
        </Route>
      
    </Switch>

  </BrowserRouter>
  );
}

export default App;
