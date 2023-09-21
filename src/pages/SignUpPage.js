import React, { Fragment, useState } from "react";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import Label from "../components/label/Label";
import Input from "../components/input/Input";
import IconEyeToggle from "../components/icons/IconEyeToggle";
import FormGroup from "../components/common/FormGroup";
import Checkbox from "../components/checkbox/Checkbox";
import Button from "../components/button/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authRegister } from "../store/auth/auth-slice";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Field should contain a valid e-mail")
    .max(255)
    .required("E-mail is required"),
  password: yup
    .string()
    .min(8, "Password must be 8 character ")
    .required("Password is required"),

  // term: yup.boolean().required("Please accpect the terms and condition"),
});

const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid, isSubmitting, errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // console.log(errors.name?.message);

  const [acceptTerm, setAcceptTerm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleToggleTerm = () => {
    setAcceptTerm(!acceptTerm);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const dispatch = useDispatch();

  const handleSignUp = async (values) => {
    try {
      console.log(
        "🚀 ~ file: SignUpPage.js:54 ~ handleSignUp ~ values:",
        values
      );
      dispatch(authRegister({ ...values, permissions: [] }));
      reset({});
    } catch (error) {
      console.log(error);
    }
    // console.log("🚀 ~ file: SignUpPage.js:18 ~ SignUpPage ~ values:", values);
  };

  return (
    <LayoutAuthentication heading="SignUp">
      <p className="text-center text-text3 mb-6 lg:mb-5 font-normal text-[12px] lg:text-[14px]">
        Already have an account?{" "}
        <Link to="/login" className="text-primary font-medium lg:underline">
          Sign in
        </Link>
      </p>
      <button className="flex items-center justify-center w-full gap-x-2 p-3 border border-strock rounded-xl mb-5 lg:mb-5 text-text2 font-semibold  dark:border-darkStroke ">
        <img src="/icon-google.png " alt="google" />
        <span className="dark:text-white">Sign up with google</span>
      </button>
      <p className="text-xs font-normal text-center lg:text-sm mb-4 lg:mb-8 text-text2 dark:text-white">
        Or sign up with email
      </p>

      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="name">FullName *</Label>
          <Input
            control={control}
            name="name"
            type="text"
            placeholder="Nguyen Manh Tien"
            error={errors.name?.message}
          ></Input>
        </FormGroup>

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

        <div className="flex items-start gap-x-5 mb-3">
          <Checkbox onClick={handleToggleTerm} name="term" checked={acceptTerm}>
            <p className="text-xs lg:text-sm text-text2 flex-1 dark:text-text3 ">
              I agree to the{" "}
              <span className="underline text-secondary">Terms of Use</span> and
              have read and understand the
              <span className="underline text-secondary"> Privacy policy.</span>
            </p>
          </Checkbox>
          <p className="text-red-600 text-[12px]">{errors.term?.message}</p>
        </div>

        <Button type="submit" kind="primary" className="mx-auto">
          Create my accout
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
