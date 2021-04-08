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

  const { handleSubmit, control } = useForm({
    defaultValues: {
      FirstName: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    console.log(data);
    const { res, error } = await callRailsApi({
      path: `users/sign_up`,
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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input control={control} name="FirstName" rules={{ required: true }} />
      <input type="submit" />
    </form>
  );
};

export default Page;
