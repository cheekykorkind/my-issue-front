import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, TextField, Paper, Grid } from '@material-ui/core';

// import useTimer from '~/hooks/use-timer';
// import Timer from '~/components/Timer';
// const EnhancedTimer: FC<{ limit: number }> = ({ limit }) => {
//   const [timeLeft, isPrime, reset] = useTimer(limit);
//   return <Timer timeLeft={timeLeft} isPrime={isPrime} reset={reset} />;
// };

const myStyle = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    marginTop: '20vh'
  }
}));

const Page: React.FC = () => {
  const classes = myStyle();

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2} justify="center" alignItems="center" direction="column" style={{ minHeight: '60vh' }}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>

        <Grid item xs={12}>
          <TextField
            // error
            label="ID"
            // helperText="Incorrect ID"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            // error
            label="Password"
            // helperText="Incorrect Password"
            variant="outlined"
          />
        </Grid>
        <Button variant="contained" color="primary">
          login
        </Button>
        <Typography variant="body1" gutterBottom>
          sign up
        </Typography>
      </Grid>
    </Paper>
  );
};

export default Page;