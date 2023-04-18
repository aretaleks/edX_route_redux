import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import GameProject from "./GameProject.jsx";
import ReactProject from "./ReactProject.jsx";
import DatabaseProject from "./DatabaseProject.jsx";
import MachineLearningProject from "./MachineLearningProject.jsx";

const Projects = ({ match }) => {
  return (
    <div>
      <ul>
        <li>
          <Link to={match.url + "/game_project"}>Game Project</Link>
        </li>
        <li>
          <Link to={match.url + "/react_project"}>React Project</Link>
        </li>
        <li>
          <Link to={match.url + "/database_project"}>Database Project</Link>
        </li>
        <li>
          <Link to={match.url + "/machine_learning_project"}>
            Machine Learning Project
          </Link>
        </li>
      </ul>
      <Switch>
        <Route
          exact
          path={match.url}
          render={() => <div>Pick a project to view!</div>}
        />
        <Route path="/projects/game_project" component={GameProject} />
        <Route path="/projects/react_project" component={ReactProject} />
        <Route path="/projects/database_project" component={DatabaseProject} />
        <Route
          path="/projects/machine_learning_project"
          component={MachineLearningProject}
        />
      </Switch>
    </div>
  );
};

export default Projects;
