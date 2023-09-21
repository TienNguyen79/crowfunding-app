import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../common/ErrorComponent";
const Input = (props) => {
  const {
    control,
    name,
    type = "text",
    error = "",
    placeholder = "",
    children,
    ...rest
  } = props;

  const { field } = useController({
    control,
    name,
    defaultValue: "",
    mode: "onSubmit",
  });
  // console.log(error);

  return (
    <div>
      <div className="relative">
        <input
          type={type}
          id={name}
          className={`py-4 px-6 w-full border font-medium  rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white text-text1 ${
            error
              ? "border-error "
              : "border-strock dark: dark:border-darkStroke"
          } ${children ? "pr-16" : ""} dark:bg-darkSecondary`}
          placeholder={error.length > 0 ? "" : placeholder}
          {...rest}
          {...field}
        />

        {children && (
          <span className="absolute top-2/4 right-6 -translate-y-2/4 select-none cursor-pointer ">
            {children}
          </span>
        )}
      </div>

      {error.length > 0 && (
        <span className=" block mt-4 text-[14px] font-medium text-error top-2/4 left-6 -translate-y-2/4 pointer-events-none error-input ">
          {error}
        </span>
      )}
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  control: PropTypes.any.isRequired,
};
export default withErrorBoundary(Input, {
  FallbackComponent: ErrorComponent,
});
