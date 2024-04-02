"use client";

import { Button } from "@/app/ui";
import { useState } from "react";

export const BlogForm = () => {
  const [formValues, setFormValues] = useState({
    title: "",
    blogText: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="py-6 bg-primary flex flex-col w-5/6 mx-auto rounded-md shadow-md"
    >
      <div className="flex flex-col my-2">
        <label htmlFor="title" className="w-5/6 mx-auto text-text">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formValues.title}
          onChange={handleFormChange}
          className="w-5/6 mx-auto rounded-sm py-1 pl-[.5rem]"
        />
      </div>

      <div className="flex flex-col my-2">
        <label htmlFor="blogText" className="w-5/6 mx-auto text-text">
          Create Blog
        </label>
        <textarea
          name="blogText"
          id="blogText"
          value={formValues.blogText}
          rows="10"
          className="w-5/6 mx-auto rounded-sm py-1 pl-[.5rem]"
          onChange={handleFormChange}
        ></textarea>
      </div>

      <div className="mx-auto">
        <Button buttonText="Submit" buttonStyle="accent" type="submit" />
      </div>
    </form>
  );
};
