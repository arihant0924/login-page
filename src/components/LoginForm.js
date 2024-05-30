import React, { useState } from "react";
import { InputField } from "./InputField";
import { GoogleSignInButton } from "./GoogleSignInButton";

export const LoginForm = () => {
  const [input, setInput] = useState("");
  const [inputError, setInputError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const validateInput = (value) => {
    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!phoneRegex.test(value) && !emailRegex.test(value)) {
      setInputError("Must be a valid 10-digit phone number or email address");
      setIsFormValid(false);
    } else {
      setInputError("");
      setIsFormValid(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputError) {
      alert("All good!");
      setInput("");
      setIsFormValid(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        input={input}
        setInput={setInput}
        validateInput={validateInput}
        inputError={inputError}
      />
      <button
        type="submit"
        disabled={!isFormValid}
        className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
          !isFormValid && "opacity-50 cursor-not-allowed"
        }`}
      >
        Next
      </button>
      <div className="mt-6 flex items-center justify-center">
        <div className="border-t border-gray-300 flex-grow mr-3"></div>
        <span className="text-gray-500">or</span>
        <div className="border-t border-gray-300 flex-grow ml-3"></div>
      </div>
      <div className="mt-6">
        <GoogleSignInButton />
      </div>
    </form>
  );
};
