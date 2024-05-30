import React from "react";
import "./App.css";
import { LoginForm } from "./components/LoginForm";
import { HelpLink } from "./components/HelpLink";
function App() {
  return (
    <div className="flex p-2 py-16 justify-center min-h-screen bg-[#00008B] text-black">
      <div
        className="relative flex bg-white p-4 rounded-sm shadow-md items-center justify-end"
        style={{ width: "90%" }}
      >
        <HelpLink />
        <div className="bg-white w-full m-4 lg:h-[115%] max-w-lg md:max-w-md p-6 rounded-sm shadow-md flex flex-col justify-between">
          <div>
            <h2 className="text-xl mb-6 text-gray-700 font-semibold text-left">
              Login to Dashboard
            </h2>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
