import { Switch } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const UsersRoutes = ({match: { url }}) => {
  return (
    <Switch>
      <Route path={`${url}/`} component={() => <>Users Sub</>} />
      
    </Switch>
  );
};

export default UsersRoutes;
