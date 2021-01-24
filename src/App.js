import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// required npm install react-router-dom to use... helps with routing
// React elements
import { BrowserRouter as Router, Route} from "react-router-dom";

// componants that have been imported
import Navbar from "./components/navbar.component.js";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    // Router element that wraps all components
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        {/* route followed what componant to load */}
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
