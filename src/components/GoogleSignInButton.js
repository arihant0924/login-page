import React from "react";

export const GoogleSignInButton = () => {
  return (
    <button
      type="button"
      className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      <svg
        className="w-5 h-5 mr-2"
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="google"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 488 512"
      >
        <path
          fill="currentColor"
          d="M488 261.8c0-17.7-1.6-34.8-4.6-51.2H250v97.1h135.7c-5.9 32-23.4 59-50.3 77.1v64.2h81.2c47.4-43.7 74.4-108.1 74.4-187.2zM250 500c68.2 0 125.5-22.7 167.3-61.5l-81.2-64.2c-23.4 15.8-53.2 25.2-86.1 25.2-66.2 0-122.3-44.8-142.3-104.7H26.7v65.8C67.8 440.7 153 500 250 500zM107.7 311.5C98.6 283 98.6 250 107.7 221.5v-65.8H26.7C8.5 189 0 218.3 0 250s8.5 61 26.7 88.5l81-27zM250 70c35.7 0 68.2 12.3 93.7 36.4L395.7 41C350.6 12 303.6 0 250 0 153 0 67.8 59.3 26.7 142.7l81 65.8C127.7 114.8 183.8 70 250 70z"
        />
      </svg>
      Sign in with Google
    </button>
  );
};
