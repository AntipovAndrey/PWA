import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

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
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" className={classes.grow}>
              ToDo
            </Typography>
            <GitHubLink/>
          </Toolbar>
        </AppBar>
        <div className={classes.toolbar}/>
        <Grid container justify="center">
          <Grid item xs={12} lg={8} xl={6}>
            <AddTodo/>
            <TodoList/>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </div>
  </>
);

export default withStyles(styles)(App);
