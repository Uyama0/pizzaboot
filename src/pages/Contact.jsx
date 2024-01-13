import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    reset();
  };

  return (
    <section className="relative max-w-lg mx-auto bg-black border-gray border-2 rounded-lg p-4">
      <h1 className="text-4xl md:text-center py-2">Drop us a line</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4"
      >
        <section>
          <label className="flex flex-col gap-2">
            First name:
            <input
              className="bg-black border-2 mb-1 border-gray rounded-lg p-2"
              {...register("firstName", {
                required: true,
              })}
            />
          </label>
          {errors.firstName && (
            <span className="text-red-300 ">This field is required</span>
          )}
        </section>
        <section>
          <label className="flex flex-col gap-2">
            Last name:
            <input
              className="bg-black border-2 border-gray rounded-lg p-2"
              {...register("lastName", {
                required: true,
              })}
            />
          </label>
          {errors.firstName && (
            <span className="text-red-300">This field is required</span>
          )}
        </section>

        <textarea
          className="bg-black border-2 rounded-lg border-gray p-2"
          rows="4"
          cols="50"
          placeholder="Start typing..."
        ></textarea>

        <input
          type="submit"
          className="text-center rounded-lg border-gray border-2 p-2 cursor-pointer hover:bg-gray"
        />
      </form>
    </section>
  );
};

export default Contact;
