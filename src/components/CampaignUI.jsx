import React from "react";
import { RiResetLeftFill } from "react-icons/ri";
import { IoMdSend } from "react-icons/io";


const CampaignUI = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans p-6">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-4 ">
  {/* Left: Logo + AI Agent text */}
  <div className="flex items-center gap-2">
    <img src="/logo.png" alt="AI Logo" className="w-8 h-8 rounded-full" />
    <span className="text-xl font-bold">AI Agent</span>
  </div>

  {/* Right: Reset Button */}
  <button className="flex items-center gap-2 text-sm text-gray-600 font-semibold border border-gray-300 px-3 py-1 rounded hover:bg-red-50">
    <RiResetLeftFill className="text-lg" />
    Reset
  </button>
</div>


      <hr className="top-10 text-gray-300  mb-6" />

      <div className="mx-12 space-y-6">
        {/* Chat messages */}
        <div className="space-y-4">
          {/* Agent message */}
          <div className="flex items-start gap-2">
            <img
              src="/logo.png"
              alt="AI Agent"
              className="w-8 h-8 rounded-full"
            />
            <div className="bg-indigo-50 p-3 rounded-md w-fit">
              Welcome Back, Kadin! How can I help you today?
            </div>
          </div>

          {/* User message */}
          <div className="flex items-start justify-end gap-2">
            <div className="bg-gray-100 p-3 rounded-md inline-block">
              Hey, I want to create a new referral campaign...
            </div>
            <img
              src="https://www.shutterstock.com/image-photo/happy-young-man-sitting-home-600w-2248472067.jpg"
              alt="User"
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>

          {/* Agent message */}
          <div className="flex items-start gap-2">
            <img
              src="/logo.png"
              alt="AI Agent"
              className="w-8 h-8 rounded-full"
            />
            <div className="bg-indigo-50 p-3 rounded-md w-fit">
              Absolutely! I’ll help you create a high-converting referral campaign...
            </div>
          </div>

          <div className="flex items-start justify-end gap-2">
            <div className="bg-gray-100 p-3 rounded-md inline-block">
              My main goal is to increase sales through referrals...
            </div>
            <img
              src="https://www.shutterstock.com/image-photo/happy-young-man-sitting-home-600w-2248472067.jpg"
              alt="User"
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>

          <div className="flex items-start gap-2">
            <img
              src="/logo.png"
              alt="AI Agent"
              className="w-8 h-8 rounded-full"
            />
            <div className="bg-indigo-50 p-3 rounded-md w-fit">
              That’s a great goal! Referral campaigns work best...
            </div>
          </div>

          <div className="flex items-start justify-end gap-2">
            <div className="bg-gray-100 p-3 rounded-md inline-block">
              Discount on next purchase
            </div>
            <img
              src="https://www.shutterstock.com/image-photo/happy-young-man-sitting-home-600w-2248472067.jpg"
              alt="User"
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>

          <div className="flex items-start gap-2">
            <img
              src="/logo.png"
              alt="AI Agent"
              className="w-8 h-8 rounded-full"
            />
            <div className="bg-indigo-50 p-3 rounded-md w-fit">
              Smart choice! Discounts are a great way...
            </div>
          </div>

          <div className="flex items-start justify-end gap-2">
            <div className="bg-gray-100 p-3 rounded-md inline-block">
              15%
            </div>
            <img
              src="https://www.shutterstock.com/image-photo/happy-young-man-sitting-home-600w-2248472067.jpg"
              alt="User"
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>

          <div className="flex items-start gap-2">
            <img
              src="/logo.png"
              alt="AI Agent"
              className="w-8 h-8 rounded-full"
            />
            <div className="bg-indigo-50 p-3 rounded-md w-fit">
              15% sounds like a strong incentive! Now, let’s define...
            </div>
          </div>

          <div className="flex items-start justify-end gap-2">
            <div className="bg-gray-100 p-3 rounded-md inline-block">
              When the referred person signs up
            </div>
            <img
              src="https://www.shutterstock.com/image-photo/happy-young-man-sitting-home-600w-2248472067.jpg"
              alt="User"
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>

          <div className="flex items-start gap-2">
            <img
              src="/logo.png"
              alt="AI Agent"
              className="w-8 h-8 rounded-full"
            />
            <div className="bg-indigo-50 p-3 rounded-md w-fit">
              That’s a great way to ensure that your campaign...
            </div>
          </div>

          <div className="flex items-start justify-end gap-2">
            <div className="bg-gray-100 p-3 rounded-md inline-block">
              I want to test this campaign for a while...
            </div>
            <img
              src="https://www.shutterstock.com/image-photo/happy-young-man-sitting-home-600w-2248472067.jpg"
              alt="User"
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>

          <div className="flex items-start gap-2">
            <img
              src="/logo.png"
              alt="AI Agent"
              className="w-8 h-8 rounded-full"
            />
            <div className="bg-indigo-50 p-3 rounded-md w-fit space-y-2">
              <p>Got it! Here's a quick summary of your campaign:</p>
              <ul className="list-disc ml-6 text-sm">
                <li><strong>Goal:</strong> Increase sales</li>
                <li><strong>Reward:</strong> 15% discount on the next purchase</li>
                <li><strong>Condition:</strong> Reward is given when the referred person makes a purchase</li>
                <li><strong>Duration:</strong> 3 months</li>
              </ul>
              <div className="flex gap-4 pt-2">
                <button className="border px-4 py-2 rounded text-indigo-600 font-semibold">Edit</button>
                <button className="bg-indigo-600 px-4 py-2 rounded text-white font-semibold">Launch</button>
              </div>
            </div>
          </div>

          {/* User confirmation */}
          <div className="flex items-start justify-end gap-2">
            <div className="bg-gray-100 p-3 rounded-md inline-block">
              Launch
            </div>
            <img
              src="https://www.shutterstock.com/image-photo/happy-young-man-sitting-home-600w-2248472067.jpg"
              alt="User"
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>
        </div>

        {/* Footer Links */}
        <hr className="top-10 text-gray-300 mt-6" />
        {/* Quick Links Header */}
<div className="mt-10 mx-24">
  <h2 className="text-lg font-semibold text-gray-700 mb-2">Quick Links</h2>
  
  {/* Button Links */}
  <div className="flex gap-4 justify-center flex-wrap text-blue-600">
    <button className="border border-blue-300 px-4 py-2 rounded text-sm font-medium hover:bg-blue-50">
      SEND REFERRAL
    </button>
    <button className="border border-blue-300 px-4 py-2 rounded text-sm font-medium hover:bg-blue-50">
      CREATE CAMPAIGN
    </button>
    <button className="border border-blue-300 px-4 py-2 rounded text-sm font-medium hover:bg-blue-50">
      FOLLOW-UP
    </button>
    <button className="border border-blue-300 px-4 py-2 rounded text-sm font-medium hover:bg-blue-50">
      VIEW REFERRAL
    </button>
  </div>
</div>
{/* Messaging Bar */}
{/* Messaging Bar */}
<div className="mt-10 bg-gray-50">
  <div className="flex items-center border border-gray-300 rounded px-4 py-3 shadow-sm">
    <input
      type="text"
      placeholder="Type your message..."
      className="flex-1 outline-none text-sm text-gray-500 placeholder-gray-400 py-2"
    />
    <button className="ml-3 text-indigo-600 hover:text-indigo-800">
      <IoMdSend className="text-2xl" />
    </button>
  </div>
</div>


      </div>
    </div>
  );
};

export default CampaignUI;
