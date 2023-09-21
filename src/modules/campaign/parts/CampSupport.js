import React from "react";
import Input from "../../../components/input/Input";
import { useForm } from "react-hook-form";
import Button from "../../../components/button/Button";

const CampSupport = () => {
  const { control } = useForm();
  return (
    <div className="bg-white shadow1 py-5 px-[25px] w-full rounded-[10px] ">
      <div className="p-[10px] text-center mb-5">
        <span className="text-text3 font-medium text-[20px]">
          Pledge without reward
        </span>
      </div>

      <div className="mt-5">
        <Input control={control} name="pledge" placeholder="$10"></Input>
      </div>

      <div className="p-5 bg-[#F6F6F6] mt-5 rounded-[10px]">
        <span className="block text-sm font-semibold text-text2 mb-5">
          Back it because you believe in it.
        </span>
        <span className="text-text3 font-normal text-sm block">
          Support the project for no reward, just because it speaks to you.
        </span>
      </div>

      <Button kind="secondary" className="mt-5">
        Continue
      </Button>
    </div>
  );
};

export default CampSupport;
