import React, { useEffect } from "react";
import FormRow from "../../components/common/FormRow";
import FormGroup from "../../components/common/FormGroup";
import Label from "../../components/label/Label";
import { useForm } from "react-hook-form";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import slugify from "slugify";
import axios from "axios";
import { apiURL } from "../../config/config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { campDelete, getdataCamp } from "../../store/campaign/camp-slice";

const CategoryAddNew = () => {
  const {
    control,
    setValue,
    formState: { errors, isSubmitting, isValid },
    handleSubmit,
    watch,
    reset,
  } = useForm({
    mode: "onChange",
  });
  const navigate = useNavigate();
  const handleAddCategory = async (values) => {
    const newValues = { ...values };
    newValues.slug = slugify(newValues.name || newValues.slug, {
      lower: true,
    });
    try {
      await axios.post(`${apiURL}/categories`, {
        ...newValues,
      });
      toast.success("Create Category successfully");
      reset({});
      navigate("/");
    } catch (error) {
      toast.error("Can't create new Category");
    }
  };

  return (
    <div className="py-10 px-[66px] bg-white rounded-lg">
      <div className="text-center">
        <div className="bg-[#B2B3BD] bg-opacity-5 inline-block py-4 px-14 rounded-xl mb-10">
          <h1 className="text-text2 text-[25px] font-bold ">
            Category Add New 🚀
          </h1>
        </div>
      </div>
      <div className="">
        <form onSubmit={handleSubmit(handleAddCategory)}>
          <FormRow>
            <FormGroup>
              <Label>Name</Label>
              <Input
                control={control}
                name="name"
                placeholder="Enter your category name"
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label>Slug</Label>
              <Input
                control={control}
                name="slug"
                placeholder="Enter your slug"
              ></Input>
            </FormGroup>
          </FormRow>
          <Button type="submit" kind="primary" className="mt-5 mx-auto">
            Add New Category
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CategoryAddNew;
