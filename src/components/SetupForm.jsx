import { useState } from "react";
import Form4 from "./Form4";

const steps = [
  { title: "Set Up Business Profile", status: "Not Started" },
  { title: "Sync Your Customer Data", status: "Not Started" },
  { title: "Set Up AI Agent Rules", status: "Not Started" },
  { title: "Set Up First Campaign", status: "Not Started" },
];

const SetupForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepStatuses, setStepStatuses] = useState(steps.map((step) => step.status));

  const handleNext = () => {
    const updatedStatuses = [...stepStatuses];
    updatedStatuses[currentStep] = "Completed";
    setStepStatuses(updatedStatuses);
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  return (
    <div className="flex rounded-3xl shadow-md overflow-hidden bg-white">
      {/* Left Stepper */}
      <div className="w-full sm:w-1/4 bg-gray-50 p-6">
        <h2 className="text-blue-600 font-semibold mb-2">Get Started with ReferralHub</h2>
        <p className="text-sm text-gray-500 mb-6">
          To get started with better referrals & rewards, complete your account setup in a few easy steps.
        </p>
        <div className="space-y-4">
          {steps.map((step, index) => {
            const isActive = index === currentStep;
            const isCompleted = stepStatuses[index] === "Completed";
            return (
              <div
                key={index}
                className="flex items-start gap-3 cursor-pointer"
                onClick={() => {
                  if (index <= currentStep) setCurrentStep(index);
                }}
              >
                <div
                  className={`h-6 w-6 rounded-full border-2 flex items-center justify-center
                  ${isCompleted ? "bg-green-500 border-green-500 text-white" :
                    isActive ? "bg-blue-600 border-blue-600 text-white" :
                    "border-gray-300 text-gray-400"}`}
                >
                  {isCompleted ? "✓" : ""}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">{step.title}</p>
                  <p className="text-xs text-gray-400">{stepStatuses[index]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Form */}
      <div className="w-full sm:w-3/4 p-10">
        {currentStep === 0 && (
          <>
            <h2 className="text-xl font-semibold text-center text-gray-800 mb-1">Build Your Business Identity</h2>
            <p className="text-sm text-center text-gray-500 mb-6">
              Help us tailor the referral experience by adding key details about your business
            </p>
            <form className="grid grid-cols-2 gap-4 text-sm">
              <div className="col-span-2 flex items-center space-x-4">
                <label htmlFor="businessLogo" className="font-medium text-gray-700 whitespace-nowrap">
                  Business Logo
                </label>
                <input
                  id="businessLogo"
                  type="file"
                  accept="image/*"
                  className="border rounded-lg px-3 py-1 cursor-pointer file:mr-4 file:py-1 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 hover:file:bg-blue-100"
                />
              </div>

              <div className="col-span-2 text-gray-600">
                <label className="block mb-1">Business Description</label>
                <textarea
                  rows="3"
                  className="w-full p-2 text-gray-600 border border-gray-500 rounded-md"
                  placeholder="Enter business description..."
                />
              </div>

              <div>
                <label className="block mb-1 text-gray-600">Business Name</label>
                <input type="text" className="w-full p-2 border border-gray-500 rounded-md" placeholder="Enter business name" />
              </div>
              <div>
                <label className="block mb-1 text-gray-600">Business Email</label>
                <input type="email" className="w-full p-2 border border-gray-500 rounded-md" placeholder="e.g., robert.fox@myemail.com" />
              </div>

              <div>
                <label className="block mb-1 text-gray-600">Business Phone No.</label>
                <input type="tel" className="w-full p-2 border border-gray-500 text-gray-600 rounded-md" placeholder="Enter phone no." />
              </div>
              <div>
                <label className="block mb-1 text-gray-600">Industry</label>
                <select className="w-full p-2 border text-gray-600 border-gray-500 rounded-md">
                  <option>Select</option>
                  <option>Finance</option>
                  <option>Retail</option>
                  <option>Healthcare</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 text-gray-600">Services</label>
                <input type="text" className="w-full p-2 border border-gray-500 rounded-md" placeholder="Enter services.." />
              </div>
              <div>
                <label className="block mb-1 text-gray-600">Products</label>
                <input type="text" className="w-full p-2 border border-gray-500 rounded-md" placeholder="Enter products..." />
              </div>

              <div>
                <label className="block text-gray-600 mb-1">Company Size <span className="text-gray-400">(Optional)</span></label>
                <select className="w-full p-2 border border-gray-500 rounded-md">
                  <option>Select</option>
                  <option>1-10</option>
                  <option>11-50</option>
                  <option>50+</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-600 mb-1">City</label>
                <select className="w-full p-2 border border-gray-500 rounded-md">
                  <option>Select</option>
                  <option>New York</option>
                  <option>Los Angeles</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-600 mb-1">State</label>
                <select className="w-full p-2 border border-gray-500 rounded-md">
                  <option>Select</option>
                  <option>California</option>
                  <option>Texas</option>
                  <option>Florida</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Zip Code</label>
                <input type="text" className="w-full p-2 border border-gray-500 rounded-md" placeholder="Enter zip code" />
              </div>

              <div className="col-span-2 text-right">
                <button
                  type="button"
                  className="bg-gradient-to-r w-80 mr-64 from-blue-500 to-blue-400 text-white px-6 py-2 rounded-md mt-4"
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
            </form>
          </>
        )}

        {currentStep === 1 && (
          <div className="text-sm text-gray-600">
            <p className="text-gray-600 text-center text-2xl">Import Customer Data: Sync with Zapier or Upload CSV</p>
            <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
              {/* Zapier Button */}
              <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50 transition mb-6">
                Connect with Zapier
              </button>

              {/* Separator */}
              <div className="flex items-center w-full max-w-md mb-6">
                <div className="flex-grow border-t border-gray-300" />
                <span className="mx-4 text-gray-500">or</span>
                <div className="flex-grow border-t border-gray-300" />
              </div>

              {/* File Upload Box */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 w-full max-w-md text-center mb-6">
                <div className="flex flex-col items-center space-y-2">
                  <p className="text-gray-600">Drag and drop files here</p>
                  <span className="text-sm text-gray-400">or</span>
                  <button
                    className="text-blue-600 border border-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition"
                  >
                    Click to Upload CSV File
                  </button>
                  <input
                    type="file"
                    accept=".csv"
                    className="hidden"
                  />
                </div>
              </div>

              {/* Next Button */}
              <button onClick={handleNext} className="bg-gradient-to-r from-blue-500 to-blue-300 text-white px-6 py-2 rounded-md hover:opacity-90 transition">
                Next
              </button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="text-sm text-gray-600">
            <div className="min-h-screen bg-black flex items-center justify-center p-6">
              <div className="w-full max-w-md bg-black text-white space-y-6">
                <div>
                  <label className="block text-gray-400 mb-2">Tone of Communication</label>
                  <select className="w-full p-3 rounded-md bg-white text-black focus:outline-none">
                    <option>Select</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">Response Style</label>
                  <select className="w-full p-3 rounded-md bg-white text-black focus:outline-none">
                    <option>Select</option>
                  </select>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>
                    <strong className="text-white">Auto-offer help</strong><br />
                    AI pops up suggestions automatically when user lands on a page.
                  </span>
                  <span className="text-blue-500 text-xl">⭘</span>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>
                    <strong className="text-white">User-initiated only</strong><br />
                    AI only responds when clicked or messaged.
                  </span>
                  <span className="text-blue-500 text-xl">⭘</span>
                </div>

                <button onClick={handleNext} className="w-full py-3 rounded-md bg-gradient-to-r from-blue-600 to-blue-300 text-white text-lg font-medium">
                  Next
                </button>
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && <Form4 />}
      </div>
    </div>
  );
};

export default SetupForm;
