import React from 'react'
import { useNavigate } from 'react-router-dom';

function Form4() {

    const navigate = useNavigate();

    const handleLaunch = () => {
      navigate("/dashboard");
    };

  return (
    <>

          <div className=" p-6 space-y-6 max-w-3xl mx-auto text-sm">
      {/* Campaign Name */}
      <div className=''>
        <h1 className='text-xl font-bold'>Create New Campaign</h1>
        <h3 className='text-md text-gray-500'>Create a new referral campaign in just few steps.</h3>
        <hr  className='text-gray-300 mt-6'/>
      </div>
      <div className="p-4 rounded shadow mb-4">
  <label className="block text-gray-700 font-semibold mb-2 text-base">
    Campaign Name
  </label>
  <input
    type="text"
    placeholder="e.g., Summer Referral Special"
    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 text-base"
  />
</div>


   {/* Promoter Settings */}
<div className="bg-white p-6 rounded-lg shadow space-y-6">
  <h2 className="text-xl font-semibold text-gray-700">Promoter Settings</h2>

  <div className="flex flex-col md:flex-row gap-6">
    {/* Reward Type */}
    <div className="flex-1">
      <label className="block mb-2 text-gray-600 font-medium text-base">
        Reward Type<span className="text-red-500">*</span>
      </label>
      <button className="w-full bg-blue-50 text-blue-600 font-semibold py-3 px-4 rounded-lg text-base">
        Points
      </button>
      <p className="text-sm text-gray-500 mt-2">
        ($1 is equivalent to 10 points)
      </p>
    </div>

    {/* Reward Value */}
    <div className="flex-1">
      <label className="block mb-2 text-gray-600 font-medium text-base">
        Reward Value<span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        placeholder="e.g., 200 points"
        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 text-base"
      />
    </div>
  </div>



  <div className="mb-6">
  <label className="block mb-2 text-gray-600 font-medium text-base">
    Promoter Message<span className="text-red-500">*</span>
  </label>
  <textarea
    placeholder='e.g., “Hey! Share this with your friends and get $20 for each successful signup!”'
    className="w-full border border-gray-300 rounded-lg px-4 py-3 h-28 text-base text-gray-700 placeholder-gray-400"
  />
</div>


       {/* Follow-Up Strategy */}
<div className="bg-indigo-50 p-6 rounded-lg space-y-5">
  <label className="block text-gray-700 font-semibold text-base mb-2">
    Follow-Up Strategy<span className="text-red-500">*</span>
  </label>

  <div className="flex items-center gap-3">
    <span className="bg-white border border-gray-300 px-4 py-2 rounded-lg text-gray-600 text-sm">
      SMS
    </span>
    <span className="bg-white border border-gray-300 px-4 py-2 rounded-lg text-gray-600 text-sm">
      Wait - 5 days
    </span>
  </div>

  <div className="bg-white p-5 rounded-lg shadow space-y-5">
    {/* Radio Options */}
    <div className="flex flex-wrap gap-6 items-center">
      <label className="flex items-center gap-2 text-gray-600 text-base">
        <input type="radio" name="action" defaultChecked /> Email
      </label>
      <label className="flex items-center gap-2 text-gray-600 text-base">
        <input type="radio" name="action" /> SMS
      </label>
      <label className="flex items-center gap-2 text-gray-600 text-base">
        <input type="radio" name="action" /> Wait Duration
      </label>
    </div>

    {/* Phone Number Field */}
    <div>
      <label className="block mb-2 text-gray-600 font-medium text-base">
        Phone Number
      </label>
      <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 text-base">
        <option>Select</option>
      </select>
    </div>

    {/* Follow-Up Message */}
    <div>
      <label className="block mb-2 text-gray-600 font-medium text-base">
        Follow-Up Message
      </label>
      <textarea
        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-700 placeholder-gray-400"
        placeholder="Enter message..."
      />
    </div>

    {/* Add Action Button */}
    <button className="bg-blue-500 hover:bg-blue-600 transition text-white w-full py-3 rounded-lg font-semibold text-base">
      + Add Action
    </button>
  </div>
</div>
</div>


      {/* Leads Settings */}
      <div className="bg-white p-6 rounded-lg shadow space-y-6">
  <h2 className="font-semibold text-lg text-gray-700">Leads Settings</h2>

  {/* Reward Settings */}
  <div className="flex gap-4">
    <div className="flex-1">
      <label className="block mb-2 text-gray-600 font-medium text-base">
        Reward Type<span className="text-red-500">*</span>
      </label>
      <button className="w-full bg-blue-100 text-blue-600 font-semibold py-3 rounded-lg text-base">
        Discount
      </button>
    </div>

    <div className="flex-1">
      <label className="block mb-2 text-gray-600 font-medium text-base">
        Reward Value<span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        placeholder="e.g., 20%"
        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-700 placeholder-gray-400"
      />
    </div>
  </div>

  {/* Referred Message */}
  <div>
    <label className="block mb-2 text-gray-600 font-medium text-base">
      Referred Message<span className="text-red-500">*</span>
    </label>
    <textarea
      placeholder='e.g., “You’ve been invited! Sign up now and get 15% off your first order.”'
      className="w-full border border-gray-300 rounded-lg px-4 py-3 h-28 text-base text-gray-700 placeholder-gray-400"
    />
  </div>

  {/* Form Fields */}
  <div>
    <label className="block mb-2 text-gray-600 font-medium text-base">
      Form Fields<span className="text-red-500"> *</span>
    </label>
    <div className="flex flex-wrap gap-4 text-gray-600 text-base">
      <label className="flex items-center gap-2">
        <input type="checkbox" defaultChecked /> Full Name
      </label>
      <label className="flex items-center gap-2">
        <input type="checkbox" defaultChecked /> Email Address
      </label>
      <label className="flex items-center gap-2">
        <input type="checkbox" /> Phone Number
      </label>
      <label className="flex items-center gap-2">
        <input type="checkbox" /> Agree
      </label>
    </div>
  </div>


       {/* Reuse Follow-Up Strategy */}
<div className="bg-indigo-50 p-6 rounded-lg space-y-4">
  <label className="block text-gray-700 font-semibold text-base mb-2">
    Follow-Up Strategy<span className="text-red-500">*</span>
  </label>

  <div className="flex items-center gap-2 text-sm text-gray-600">
    <span className="bg-white border border-gray-300 px-4 py-1.5 rounded-lg">
      SMS
    </span>
    <span className="bg-white border border-gray-300 px-4 py-1.5 rounded-lg">
      Wait - 5 days
    </span>
  </div>

  <div className="bg-white p-5 rounded-lg shadow space-y-5">
    <div className="flex gap-6 items-center text-gray-700 text-base">
      <label className="flex items-center gap-2">
        <input type="radio" name="lead-action" /> Email
      </label>
      <label className="flex items-center gap-2">
        <input type="radio" name="lead-action" defaultChecked /> SMS
      </label>
      <label className="flex items-center gap-2">
        <input type="radio" name="lead-action" /> Wait Duration
      </label>
    </div>

    <div>
      <label className="block text-gray-600 font-medium mb-2">
        Phone Number
      </label>
      <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-700">
        <option>Select</option>
      </select>
    </div>

    <div>
      <label className="block text-gray-600 font-medium mb-2">
        Follow-Up Message
      </label>
      <textarea
        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-700 placeholder-gray-400"
        placeholder="Enter message..."
        rows={4}
      />
    </div>

    <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white w-full py-3 rounded-lg font-semibold text-base">
      + Add Action
    </button>
  </div>
  <div className="flex justify-end pt-6">
        <button
          onClick={handleLaunch}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all text-base"
        >
          🚀 Launch
        </button>
      </div>
</div>
</div>
</div>

    </>
  )
}

export default Form4