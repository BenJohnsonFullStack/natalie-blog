"use client";
import { useState } from "react";
import { Eye, EyeSlash } from "./password";

export const LoginForm = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePassword = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleFormChange = (evt) => {
    const { name, value } = evt.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <form className="py-6 bg-accent flex flex-col w-5/6 mx-auto rounded-md shadow-md">
      <div className="flex flex-col my-2">
        <label htmlFor="username" className="text-left w-3/4 mx-auto">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formValues.username}
          className="w-3/4 mx-auto rounded-sm py-1 pl-[.5rem]"
          onChange={handleFormChange}
        />
      </div>

      <div className="flex flex-col my-2">
        <label htmlFor="password" className="text-left w-3/4 mx-auto">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formValues.password}
          className="w-3/4 mx-auto mb-4 rounded-sm py-1 pl-[.5rem]"
          onChange={handleFormChange}
        />
        {isPasswordVisible ? (
          <EyeSlash togglePassword={togglePassword} />
        ) : (
          <Eye togglePassword={togglePassword} />
        )}
      </div>
    </form>
  );
};
