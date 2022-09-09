import { lazy } from 'react';

import { Switch } from '@material-ui/core';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import LazyLoading from '_common/components/LazyLoading';

const DashboardRoutes = lazy(() => import("modules/dashboard/dashboard.routes"));
const TaksRoutes = lazy(() => import("modules/tasks/tasks.routes"));
const UsersRoutes = lazy (() => import("modules/users/users.routes"));


const MainRoutes = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/tarefas">Tarefas</Link>
            </li>
            <li>
              <Link to="/usuarios">Usuários</Link>
            </li>
          </ul>
        </nav>

        <Switch>          
            <Route  component="/dashboard*" element={  (DashboardRoutes)} />
            <Route  component="/tarefas"  element={ LazyLoading (TaksRoutes)} />          
            <Route  component="/usuarios*" element={ LazyLoading (UsersRoutes)} />

            
        </Switch>   
       
      </div>
    </BrowserRouter>
  );
};

export default MainRoutes;
