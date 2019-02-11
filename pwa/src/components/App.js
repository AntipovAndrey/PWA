import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';

import TodoList from './TodoList';
import AddTodo from './AddTodo';
import GitHubLink from './GitHubLink';

const styles = (theme) => ({
  toolbar: theme.mixins.toolbar,
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
});

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

const App = ({classes}) => (
  <>
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline/>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              ToDo
            </Typography>
            <GitHubLink/>
          </Toolbar>
        </AppBar>
        <Paper>
          <div className={classes.toolbar}/>
          <AddTodo/>
          <TodoList/>
        </Paper>
      </MuiThemeProvider>
    </div>
  </>
);

export default withStyles(styles)(App);
