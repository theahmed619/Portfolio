import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/aqoknkra", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10"
      >
        <h1 className="text-3xl font-bold mb-4">Contact me</h1>
        <span>Fill the below form to connect with me </span>
        <div className="flex flex-col items-center justify-center ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            //action="https://getform.io/f/aqoknkra"
            // method="post"
            className="bg-slate-700 w-98  px-8 py-6 rounded-xl"
          >
            <h1 className="text-xl  font-semibold text-center ">
              Send your Message
            </h1>
            <div className="flex flex-col mb-4">
              <label htmlFor="" className="text-black">
                Name{" "}
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                name="name"
                id=""
                className="shadow rounded-lg appearance-none border  py-1 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="" className="text-black">
                Email{" "}
              </label>
              <input
                {...register("email", { required: true })}
                type="text"
                name="email"
                id=""
                className="shadow rounded-lg appearance-none border  py-1 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="" className="text-black">
                Message{" "}
              </label>
              <textarea
                {...register("message", { required: true })}
                type="text"
                name="message"
                id=""
                className="shadow rounded-lg appearance-none border  py-1 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.message && <span>This field is required</span>}
            </div>
            <div className="flex justify-center">
             
              <button
                type="submit"
                className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300 text-center"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
