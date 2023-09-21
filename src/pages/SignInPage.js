import React, { useEffect, useState } from "react";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import { Link, useNavigate } from "react-router-dom";
import ButtonGoogle from "../components/button/ButtonGoogle";
import FormGroup from "../components/common/FormGroup";
import Label from "../components/label/Label";
import Input from "../components/input/Input";
import IconEyeToggle from "../components/icons/IconEyeToggle";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Button from "../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../store/auth/auth-slice";
const schema = yup.object({
  email: yup
    .string()
    .email("Field should contain a valid e-mail")
    .max(255)
    .required("E-mail is required"),
  password: yup
    .string()
    .min(8, "Password must be 8 character ")
    .required("Password is required"),
});

const SignInPage = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // console.log(errors.name?.message);

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useDispatch();
  const handleSignIn = (values) => {
    // console.log("🚀 ~ file: SignInPage.js:42 ~ handleSignIn ~ values:", values);
    dispatch(authLogin(values));
  };

  // const { user } = useSelector((state) => state.auth);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (user && user.id) {
  //     navigate("/");
  //   }
  // }, [user]);

  return (
    <LayoutAuthentication heading="Welcome Back!">
      <p className="text-center text-text3 mb-6 lg:mb-5 font-normal text-[12px] lg:text-[14px]">
        Dont have an account?{" "}
        <Link to="/register" className="text-primary font-medium lg:underline">
          Sign up
        </Link>
      </p>
      <ButtonGoogle text="Sign in with google"></ButtonGoogle>

      <form onSubmit={handleSubmit(handleSignIn)}>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            name="email"
            type="text"
            placeholder="tiennguyen@gmail.com"
            error={errors.email?.message}
          ></Input>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>

        <FormGroup>
          <div className="text-right  select-none">
            <span className="text-primary text-sm font-medium">
              Forgot password
            </span>
          </div>
        </FormGroup>

        <Button type="submit" kind="primary" className="mx-auto w-[200px]">
          Sign in
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
