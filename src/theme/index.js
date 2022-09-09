import createTheme  from '@material-ui/core/styles/createTheme';
import  purple  from '@material-ui/core/colors/purple';
import  green  from '@material-ui/core/colors/green';

const theme = createTheme ( {
  palette: {
    primary: {
      main: purple [500],
    },
    secondary: {
      main: green [500],
    },
  },
  shape:{
    borderRadius:2
  }
});

window['theme'] = theme;

export default theme;

