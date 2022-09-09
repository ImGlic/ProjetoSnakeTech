import { Switch } from '@material-ui/core';
import { BrowserRouter as  Route  } from 'react-router-dom';
import PageHeader from '_common/components/PageHeader';

const DashboardRoutes = ({match: { url }}) => {
  return (
    <Switch>
      <Route path={`${url}/`} component={() => <> <PageHeader/> </>} />
      
    </Switch>
  );
};

export default DashboardRoutes;
