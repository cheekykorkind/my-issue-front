/* eslint-disable camelcase */
// eslint-disable-next-line no-use-before-define
import React, { FC } from "react";
import { TextField } from "@material-ui/core";
import { useForm, useController } from "react-hook-form";

function Input(props) {
  const { field, fieldState } = useController(props);

  return (
    <div>
      <TextField {...field} placeholder={props.name} />
      <p>{fieldState.isTouched && "Touched"}</p>
      <p>{fieldState.isDirty && "Dirty"}</p>
      <p>{fieldState.invalid ? "invalid" : "valid"}</p>
    </div>
  );
}

const Page: React.FC = () => {
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

  //   "user": {
  //     "email": "me@gmail.com",
  //     "password": "password",
  //     "password_confirmation": "password"
  // }

  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
      password: "",
      password_confirmation: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    console.log(data);
    const devise_body = {
      user: {
        email: data.email,
        password: data.password,
        password_confirmation: data.password_confirmation,
      },
    };
    // const devise_body = {
    //   email: data.email,
    //   password: data.password,
    //   password_confirmation: data.password_confirmation,
    // };

    const { res, error } = await callRailsApi({
      path: `users/sign_up`,
      data: devise_body,
    });
    console.log(res);
    console.log(error);

    // if (error === null) {
    //   console.log(1);
    // } else {
    //   console.log(2);
    // }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <input autofocus="autofocus" autocomplete="email" type="email" value="" name="user[email]" id="user_email"></input> */}
      {/* <input autocomplete="new-password" type="password" name="user[password]" id="user_password"> */}
      {/* <input autocomplete="new-password" type="password" name="user[password_confirmation]" id="user_password_confirmation"> */}
      <Input control={control} name="email" rules={{ required: true }} />
      <Input control={control} name="password" rules={{ required: true }} />
      <Input control={control} name="password_confirmation" rules={{ required: true }} />

      <input type="submit" />
    </form>
  );
};

export default Page;
