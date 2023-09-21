import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import FormRow from "../../components/common/FormRow";
import FormGroup from "../../components/common/FormGroup";
import Label from "../../components/label/Label";
import Input from "../../components/input/Input";
import Dropdown from "../../components/dropdown/Dropdown";
import Select from "../../components/dropdown/Select";
import List from "../../components/dropdown/List";
import Options from "../../components/dropdown/Options";
import TextArea from "../../components/input/TextArea";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageUploader from "quill-image-uploader";
import Search from "../../components/dropdown/Search";
import axios from "axios";
import useOnChange from "../../hooks/useOnChange";
import { toast } from "react-toastify";
import Button from "../../components/button/Button";
import { apiURL, imgbbAPI } from "../../config/config";
import ImageUpload from "../../image/ImageUpload";
import slugify from "slugify";
import { useDispatch, useSelector } from "react-redux";
import { campAddNew, getdataCamp } from "../../store/campaign/camp-slice";
Quill.register("modules/imageUploader", ImageUploader);

const CampaignAddNew = () => {
  const {
    handleSubmit,
    control,
    setValue,
    reset,
    watch,
    formState: { errors, isSubmitting, isValid },
  } = useForm();

  const getDropdowmLabel = (name, defaultValue = "") => {
    const value = watch(name) || defaultValue;
    return value;
  };

  const [content, setContent] = useState("");
  const [labelCategory, setLabelCategory] = useState("");
  const { user } = useSelector((state) => state.auth);
  const { dataCamp } = useSelector((state) => state.camp);
  console.log(
    "🚀 ~ file: CampaignAddNew.js:46 ~ CampaignAddNew ~ dataCamp:",
    dataCamp
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getdataCamp());
  }, [dispatch]);

  const handleAddNewCampaign = async (values) => {
    // console.log(
    //   "🚀 ~ file: CampaignAddNew.js:16 ~ handleAddNewCampaign ~ values:",
    //   values
    // );
    if (!isValid) return;

    const newValues = { ...values }; //clone value
    newValues.slug = slugify(newValues.title || newValues.slug, {
      lower: true,
    });
    try {
      // await axios.post(`${apiURL}/campaigns`, {
      //   ...newValues,
      //   content,
      //   user,
      // });
      dispatch(campAddNew({ ...newValues, content, user }));
      toast.success("Create Campaign successfully");
      setContent("");
      reset({});
    } catch (error) {
      toast.error("Can't create new Campaign");
    }
  };

  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      imageUploader: {
        upload: async (file) => {
          const bodyFormData = new FormData();
          bodyFormData.append("image", file);
          const response = await axios({
            method: "post",
            url: imgbbAPI,
            data: bodyFormData,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          return response.data.data.url;
        },
      },
    }),
    []
  );

  const [countries, setCountries] = useState([]);
  const [filterCountry, setFilterCountry] = useOnChange(1000);
  useEffect(() => {
    //https://restcountries.com/v3.1/name/tencantim

    async function fetchCountry() {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${filterCountry}`
        );
        // console.log(
        //   "🚀 ~ file: CampaignAddNew.js:59 ~ fetchCountry ~ response:",
        //   response.data
        // );
        setCountries(response?.data || []);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchCountry();
  }, [filterCountry]);

  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    async function fetchCategory() {
      try {
        const response = await axios.get(`${apiURL}/categories`);
        setCategoriesData(response?.data || []);
        // console.log(
        //   "🚀 ~ file: CampaignAddNew.js:129 ~ fetchCategory ~ response:",
        //   response.data
        // );
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchCategory();
  }, []);

  // const testDelete = async (id) => {
  //   try {
  //     console.log("🚀 ~ file: CampaignAddNew.js:141 ~ testDelete ~ id:", id);
  //     // const response = await axios.delete(`${apiURL}/categories/delete/${id}`);
  //     // console.log("Response:", response.data); // In ra phản hồi từ server
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  const handleSelectDropDownOption = (name, value) => {
    setValue(name, value);
    setLabelCategory(value?.name);
    // console.log(value);
  };

  return (
    <div className="py-10 px-[66px] bg-white rounded-lg">
      <div className="text-center">
        <div className="bg-[#B2B3BD] bg-opacity-5 inline-block py-4 px-14 rounded-xl mb-10">
          <h1 className="text-text2 text-[25px] font-bold ">
            Start a Campaign 🚀
          </h1>
        </div>
      </div>
      <form onSubmit={handleSubmit(handleAddNewCampaign)}>
        <FormRow className="mb-[15px]">
          <FormGroup>
            <Label htmlFor="title">Campaign Titel *</Label>
            <Input
              placeholder="Write a titel"
              control={control}
              name="title"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="category">Select a category *</Label>
            <Dropdown>
              <Select
                placeholder={labelCategory || "Select a category *"}
              ></Select>
              <List>
                {categoriesData.map((category, index) => (
                  <Options
                    key={category.name}
                    onClick={
                      () => handleSelectDropDownOption("category", category)
                      // console.log(category)
                      // testDelete(category.id)
                    }
                  >
                    {category.name}
                  </Options>
                ))}
              </List>
            </Dropdown>
          </FormGroup>
        </FormRow>

        <FormGroup>
          <Label htmlFor="short_description">Short Description *</Label>
          <TextArea
            control={control}
            name="short_description"
            placeholder="Write a short description...."
          ></TextArea>
        </FormGroup>

        <FormGroup className="mb-10">
          <Label className="mt-[15px]">Story *</Label>
          <ReactQuill
            placeholder="Write your story......"
            modules={modules}
            theme="snow"
            value={content}
            onChange={setContent}
            className="w-full  max-w-[350px] md:max-w-[760px] lg:max-w-full "
          />
        </FormGroup>

        <FormRow>
          <FormGroup>
            <Label>Feature Image</Label>
            <ImageUpload onChange={setValue} name="feature_image"></ImageUpload>
          </FormGroup>

          <FormGroup>
            <Label>Slug</Label>
            <Input
              name="slug"
              control={control}
              placeholder="Enter your slug"
            ></Input>
          </FormGroup>
        </FormRow>

        <div className="h-[120px] rounded-[10px] bg-purple-500 my-10 pl-[45px] pr-[90px] flex items-center gap-x-6">
          <span>
            <svg
              width={32}
              height={40}
              viewBox="0 0 32 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.4997 9.979H9.16634C8.66634 9.979 8.33301 10.3123 8.33301 10.8123C8.33301 11.3123 8.66634 11.6457 9.16634 11.6457H22.4997C22.9997 11.6457 23.333 11.3123 23.333 10.8123C23.333 10.3123 22.9997 9.979 22.4997 9.979Z"
                fill="white"
              />
              <path
                d="M8.4999 7.81266C8.4999 8.146 8.83324 8.31266 9.16657 8.31266H22.4999C22.8332 8.31266 23.1666 8.146 23.1666 7.81266L26.4999 1.146C26.6666 0.812663 26.6666 0.479329 26.3332 0.145996C26.1666 -0.0206706 25.8332 -0.0206706 25.4999 0.145996L19.3332 3.146L16.4999 0.312663C16.1666 -0.0206706 15.6666 -0.0206706 15.3332 0.312663L12.3332 3.146L6.16657 0.145996C5.83324 -0.0206706 5.4999 -0.0206706 5.16657 0.145996C4.83324 0.312663 4.9999 0.812663 5.16657 1.146L8.4999 7.81266Z"
                fill="white"
              />
              <path
                d="M23.1667 13.6456C23 13.4789 22.6667 13.3123 22.5 13.3123H9.16667C9 13.3123 8.66667 13.4789 8.5 13.6456C8.16667 13.9789 0 22.6456 0 27.4789C0 34.3123 7.16667 39.9789 15.8333 39.9789C24.5 39.9789 31.6667 34.3123 31.6667 27.4789C31.6667 22.6456 23.5 13.9789 23.1667 13.6456ZM16.6667 33.3123V34.1456C16.6667 34.6456 16.3333 34.9789 15.8333 34.9789C15.3333 34.9789 15 34.6456 15 34.1456V33.3123C13.1667 32.9789 11.8333 31.8123 11.6667 30.3123C11.6667 29.8123 12 29.4789 12.5 29.4789C13 29.4789 13.3333 29.8123 13.3333 30.3123C13.3333 30.9789 14.1667 31.6456 15 31.8123V28.4789C12.8333 27.9789 11.6667 26.8123 11.6667 25.3123C11.6667 23.6456 13.1667 22.3123 15 21.9789V21.1456C15 20.6456 15.3333 20.3123 15.8333 20.3123C16.3333 20.3123 16.6667 20.6456 16.6667 21.1456V21.6456C18.5 21.9789 19.8333 23.1456 20 24.6456C20 25.1456 19.6667 25.4789 19.1667 25.4789C18.6667 25.4789 18.3333 25.1456 18.3333 24.6456C18.3333 23.9789 17.5 23.3123 16.6667 23.1456V26.4789C18.8333 26.9789 20 28.1456 20 29.6456C20 31.6456 18.5 32.9789 16.6667 33.3123Z"
                fill="white"
              />
              <path
                d="M16.667 28.4785V31.4785C17.667 31.3119 18.3337 30.6452 18.3337 29.9785C18.3337 29.3119 17.8337 28.8118 16.667 28.4785Z"
                fill="white"
              />
              <path
                d="M13.333 24.9788C13.333 25.6454 13.833 26.1454 14.9997 26.4788V23.4788C13.9997 23.6454 13.333 24.3121 13.333 24.9788Z"
                fill="white"
              />
            </svg>
          </span>
          <span className="text-white text-[25px] font-bold">
            You will get 90% of total raised
          </span>
        </div>

        <FormRow className="mb-[15px]">
          <FormGroup>
            <Label htmlFor="goal">Goal *</Label>
            <Input
              placeholder="$0.00 USD"
              control={control}
              name="goal"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="amount">Raised Amount *</Label>
            <Input
              placeholder="$0.00 USD"
              control={control}
              name="amount"
            ></Input>
          </FormGroup>
        </FormRow>

        <FormRow className="mb-[15px]">
          <FormGroup>
            <Label htmlFor="prefilled">Amount Prefilled</Label>
            <Input
              placeholder="Amount Prefilled"
              control={control}
              name="prefilled"
            ></Input>
            <p className="text-text3 text-sm font-normal">
              It will help fill amount box by click, place each amount by comma,
              ex: 10,20,30,40
            </p>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="video">Video *</Label>
            <Input placeholder="Video" control={control} name="video"></Input>
            <p className="text-text3 text-sm font-normal">
              Place Youtube or Vimeo Video URL
            </p>
          </FormGroup>
        </FormRow>

        <FormRow className="mb-[15px]">
          <FormGroup>
            <Label htmlFor="method">Campaign End Method</Label>
            <Dropdown>
              <Select placeholder="Select one"></Select>
              <List>
                <Options>...</Options>
              </List>
            </Dropdown>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="country">Counrty</Label>
            <Dropdown>
              <Select
                placeholder={getDropdowmLabel("country", "Select a country")}
              ></Select>
              <List>
                <Search
                  placeholder="Search Country..."
                  onChange={setFilterCountry}
                ></Search>
                {countries.length > 0 &&
                  countries.map((country, index) => (
                    <Options
                      key={country?.name?.common}
                      onClick={() =>
                        handleSelectDropDownOption(
                          "country",
                          country?.name?.common
                        )
                      }
                    >
                      {country?.name?.common}
                    </Options>
                  ))}
              </List>
            </Dropdown>
          </FormGroup>
        </FormRow>

        <FormRow className="mb-[15px]">
          <FormGroup>
            <Label htmlFor="startDate">Start Date</Label>
            <Input
              placeholder="Start Date"
              control={control}
              name="startDate"
              type="date"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="endDate">Start Date</Label>
            <Input
              placeholder="End Date"
              control={control}
              name="endDate"
              type="date"
            ></Input>
          </FormGroup>
        </FormRow>

        <Button
          type="submit"
          className="bg-primary  font-semibold py-3 px-5 rounded-xl text-white text-base mx-auto"
        >
          Submit new campaign
        </Button>
      </form>
    </div>
  );
};

export default CampaignAddNew;
