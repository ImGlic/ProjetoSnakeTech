import { Switch } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const TaksRoutes = ({match: { url }}) => {
  return (
    <Switch>
      <Route path={`${url}/`} component={() => <>Tarefas Sub</>} />
      
    </Switch>
  );
};

export default TaksRoutes;
