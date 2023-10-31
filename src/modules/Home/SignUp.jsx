import React from "react";

export const SignUp = () => {
  return (
    <div
      className="px-5 md:px-24 py-16 w-full bg-[url('/assets/aw7sl-0sq36.jpg')] bg-cover bg-center"
      id="signup"
    >
      <div className="bg-white text-black px-5 md:px-10 py-8 rounded-xl max-w-[85vw]  md:max-w-[70vw] mx-auto">
        <h2 className="text-3xl font-ethnocentric mb-5">
          Sign Up to F1 UNLOCKED
        </h2>
        <form className="flex flex-col mb-3">
          <label htmlFor="emailSubs">Email Address</label>
          <input
            type="text"
            name="emailSubs"
            id="emailSubs"
            placeholder="Email"
            className="border border-theme-gray text-black text-sm rounded-lg block w-full p-2.5 my-2"
          />
          <div>
            <button
              type="submit"
              className="px-4 py-2 bg-theme-red text-white rounded-lg hover:bg-white hover:text-theme-red border border-theme-red transition duration-300 ease-in-out"
            >
              Subscribe
            </button>
          </div>
        </form>
        <span className="text-xs">
          By clicking on subscribe, I agree that I have read and agree to the
          Terms and Conditions and Privacy Policy
        </span>
      </div>
    </div>
  );
};
