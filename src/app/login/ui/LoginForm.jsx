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
        <label htmlFor="username" className="w-3/4 mx-auto text-text">
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
        <label htmlFor="password" className="w-3/4 mx-auto text-text">
          Password
        </label>
        <div className="w-3/4 mx-auto relative">
          <input
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            name="password"
            value={formValues.password}
            className="w-full mb-4 rounded-sm py-1 pl-[.5rem]"
            onChange={handleFormChange}
          />
          {isPasswordVisible ? (
            <EyeSlash togglePassword={togglePassword} />
          ) : (
            <Eye togglePassword={togglePassword} />
          )}
        </div>
      </div>
    </form>
  );
};
