import React from "react";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../common/ErrorComponent";
const ButtonGoogle = ({ text = "Sign up with google", onClick = () => {} }) => {
  return (
    <button
      className="flex items-center justify-center w-full gap-x-2 p-3 border border-strock rounded-xl mb-5 lg:mb-5 text-text2 font-semibold  dark:border-darkStroke"
      onClick={onClick}
    >
      <img src="/icon-google.png " alt="google" />
      <span className="dark:text-white">{text}</span>
    </button>
  );
};

ButtonGoogle.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default withErrorBoundary(ButtonGoogle, {
  FallbackComponent: ErrorComponent,
});
