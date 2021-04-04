import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, TextField, Paper, Grid } from "@material-ui/core";

import fetch from "isomorphic-unfetch";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// import useTimer from '~/hooks/use-timer';
// import Timer from '~/components/Timer';
// const EnhancedTimer: FC<{ limit: number }> = ({ limit }) => {
//   const [timeLeft, isPrime, reset] = useTimer(limit);
//   return <Timer timeLeft={timeLeft} isPrime={isPrime} reset={reset} />;
// };

const myStyle = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
    marginTop: "20vh",
  },
}));
// sign_up
const Page: React.FC = () => {
  //---------------------------------------------------------------------------
  // Validation
  const schema = yup.object().shape({
    user_id: yup.string().required().max(255),
    description: yup.string().required().max(255),
  });

  const {
    control,
    formState: { errors },
    register,
    handleSubmit,
    getValues,
    trigger,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const callRailsApi = async (args) => {
    const url = `${process.env.API_DOMAIN}/${args.path}`;

    let res = null;
    let error = null;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(args.data),
      });

      if (response.ok) {
        if (response.status !== 204) {
          res = await response.json();
        }
      } else {
        error = {
          status: response.status,
          detail: await response.json(),
        };
      }
      return { res, error };
    } catch (e) {
      error = {
        status: 500,
        detail: e,
      };
      return { res, error };
    }
  };

  const onSubmit = async (data) => {
    console.log(data);
    const { res, error } = await callRailsApi({
      path: `sign_up`,
      data: {
        user_id: data.user_id,
        password: data.password,
      },
    });
    // console.log(res);

    if (error === null) {
      console.log(1);
    } else {
      console.log(2);
    }
  };

  const classes = myStyle();

  return (
    <Paper className={classes.paper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          spacing={2}
          justify="center"
          alignItems="center"
          direction="column"
          style={{ minHeight: "60vh" }}
        >
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>

          <Grid item xs={12}>
            <Controller
              render={({ field }) => (
                <TextField
                  {...field}
                  label="ID"
                  variant="outlined"
                  placeholder="user id"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={!!errors.user_id}
                  helperText={errors.user_id && errors.user_id.message}
                />
              )}
              control={control}
              name="user_id"
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Password"
                  variant="outlined"
                  placeholder="user id"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={!!errors.user_id}
                  helperText={errors.user_id && errors.user_id.message}
                />
              )}
              control={control}
              name="password"
            />
          </Grid>
          <Button variant="contained" color="primary" type="submit">
            login
          </Button>
          <Typography variant="body1" gutterBottom>
            sign up
          </Typography>
        </Grid>
      </form>
    </Paper>
  );
};

export default Page;
