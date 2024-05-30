import React from "react";

export const Footer = () => {
  return (
    <p className="mt-6 text-center text-xs">
      Protected by reCAPTCHA. Google <br />
      <a href="#" className="text-blue-500 hover:text-blue-700">
        Privacy Policy
      </a>{" "}
      &{" "}
      <a href="#" className="text-blue-500 hover:text-blue-700">
        Terms of Service
      </a>{" "}
      apply.
    </p>
  );
};
