import React, { useState } from 'react';
import { CiSquarePlus } from "react-icons/ci";
import { FaEye, FaTrashAlt, FaEdit, FaTrash } from "react-icons/fa";

function Camp() {
  const [activeSection, setActiveSection] = useState('pastPromoters');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const steps = [
    {
      icon: <span className="text-blue-500 font-bold">1</span>,
      type: 'Initial Contact',
    },
    {
      icon: <span className="text-blue-500 font-bold">2</span>,
      type: 'Follow Up',
    },
    {
      icon: <span className="text-blue-500 font-bold">3</span>,
      type: 'Closing',
    },
  ];

  return (
    <>
      {/* Navigation Buttons */}
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          {['pastPromoters', 'newPromoters', 'newLeads'].map((section) => (
            <button
              key={section}
              className={`px-4 py-2 rounded-md ${
                activeSection === section ? 'bg-blue-100' : 'bg-gray-200'
              }`}
              onClick={() => handleSectionChange(section)}
            >
              {section === 'pastPromoters'
                ? 'Past Promoters'
                : section === 'newPromoters'
                ? 'New Promoters'
                : 'New Leads'}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600">
            <CiSquarePlus className="inline mr-2" /> Create New Campaign
          </button>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search campaigns..."
              className="border px-4 py-2 rounded-md"
            />
            <button className="border px-4 py-2 rounded-md flex items-center">
              <span className="mr-1">Filter</span>
              <FaEye className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Campaign summary */}
        <div className="text-sm text-gray-500 mb-4">
          <span>2 Campaigns • </span>
          <span className="text-blue-500 font-medium">1 Active</span>
        </div>

        {/* Sections */}
        {activeSection === 'pastPromoters' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="bg-white p-4 rounded-xl shadow-md space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="font-semibold text-lg text-gray-700">
                    Summer Referral Program
                  </h2>
                  <p className="text-sm text-gray-500">5/31/2024 - 8/30/2024</p>
                </div>
                <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded">
                  Active
                </span>
              </div>
              <div className="flex justify-between text-center text-sm font-medium text-gray-600 border-t border-b border-gray-300 py-2">
                <div>
                  <div className="text-black text-lg font-bold">245</div>
                  <div>Referrals</div>
                </div>
                <div>
                  <div className="text-black text-lg font-bold">32%</div>
                  <div>Conversion</div>
                </div>
                <div>
                  <div className="text-black text-lg font-bold">287%</div>
                  <div>ROI</div>
                </div>
              </div>
              <div className="bg-purple-50 text-sm p-3 rounded-md flex items-start space-x-2">
                <FaEye className="text-purple-500 mt-0.5" />
                <p className="text-gray-700">
                  Increase reward by 10% to boost conversion rates during peak
                  season
                </p>
              </div>
              <div className="flex justify-between text-gray-400 mt-2">
                <button>
                  <FaTrashAlt className="text-gray-700" />
                </button>
                <button>
                  <FaEye />
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-4 rounded-xl shadow-md space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="font-semibold text-lg text-gray-700">
                    Early Bird Special
                  </h2>
                  <p className="text-sm text-gray-500">8/20/2024 - 9/19/2024</p>
                </div>
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded">
                  Inactive
                </span>
              </div>
              <div className="flex justify-between text-center text-sm font-medium text-gray-600 border-t border-b border-gray-300 py-2">
                <div>
                  <div className="text-black text-lg font-bold">300</div>
                  <div>Referrals</div>
                </div>
                <div>
                  <div className="text-black text-lg font-bold">40%</div>
                  <div>Conversion</div>
                </div>
                <div>
                  <div className="text-black text-lg font-bold">320%</div>
                  <div>ROI</div>
                </div>
              </div>
              <div className="bg-purple-50 text-sm p-3 rounded-md flex items-start space-x-2">
                <FaEye className="text-purple-500 mt-0.5" />
                <p className="text-gray-700">
                  Extend your campaign! Strong engagement suggests higher
                  conversions with more time.
                </p>
              </div>
              <div className="flex justify-between text-gray-400 mt-2">
                <button>
                  <FaTrashAlt className="text-gray-700" />
                </button>
                <button>
                  <FaEye />
                </button>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'newPromoters' && (
          <div className="space-y-6 bg-gray-50 p-4 rounded-xl">
            {/* Tab Switch */}
            <div className="flex bg-white rounded-lg overflow-hidden shadow-md">
              <button className="w-1/2 px-6 py-3 text-white font-semibold bg-blue-600">
                Promoter Settings
              </button>
              <button className="w-1/2 px-6 py-3 text-gray-600 font-semibold bg-gray-100">
                Leads Settings
              </button>
            </div>

            {/* Campaign Name */}
            <div className="bg-white p-6 rounded-xl shadow">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Campaign Name
              </label>
              <input
                type="text"
                value="Summer Referral Special"
                className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Rewards */}
            <div className="bg-white rounded-xl shadow p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reward Type<span className="text-red-500">*</span>
                </label>
                <div className="text-center bg-blue-100 border-2 border-blue-400 py-3 rounded-lg text-blue-700 font-semibold">
                  Points <p className="text-xs text-blue-500">($1 = 10 points)</p>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reward Value<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value="200 points"
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>

            {/* Promoter Message */}
            <div className="bg-white rounded-xl shadow p-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Promoter Message<span className="text-red-500">*</span>
              </label>
              <textarea
                rows={4}
                defaultValue="Hey! Share this with your friends and get $20 for each successful signup!"
                className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Follow-Up Strategy */}
            <div className="bg-white rounded-xl shadow p-6">
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Follow-Up Strategy<span className="text-red-500">*</span>
              </label>
              <div className="space-y-4">
                {[
                  "SMS",
                  "Wait - 5 days",
                  "Email",
                  "Wait - 2 days",
                  "SMS",
                  "Wait - 3 days",
                  "SMS",
                ].map((step, index) => (
                  <div
                    key={index}
                    className="flex justify-between bg-gray-100 px-4 py-2 rounded-lg"
                  >
                    <span className="text-sm font-medium">{step}</span>
                    <div className="space-x-3 text-gray-500">
                      <FaEdit className="inline cursor-pointer" />
                      <FaTrash className="inline cursor-pointer" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Landing Page Preview */}
            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Landing Page Preview
              </h2>
              <div className="text-center bg-gradient-to-r from-green-50 to-pink-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Welcome back! You're promoting:
                  <br />
                  SnackNation Express
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  SnackNation delivers hand-picked, chef-curated snacks — from spicy masala nuts to sweet jaggery treats — delivered fresh to your door in under 45 minutes.
                </p>
                <div className="inline-block bg-blue-100 text-blue-700 font-semibold py-2 px-4 rounded-lg mb-4">
                  Every successful referral earns you 200 points
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'newLeads' && (
      <div className="p-6 bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-md w-full max-w-xl p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Leads Settings</h2>

          <div className="bg-blue-50 p-6 rounded-xl space-y-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Follow-Up Strategy<span className="text-red-500">*</span>
            </label>

            <div className="space-y-4 relative">
              {steps.map((step, index) => (
                <div key={index} className="relative z-10 flex items-center justify-between bg-white px-4 py-2 rounded-lg border shadow-sm">
                  <div className="flex items-center gap-2">
                    {step.icon}
                    <span className="text-sm font-medium text-gray-700">{step.type}</span>
                  </div>
                  <div className="flex gap-3 text-red-500">
                    <FaEdit className="cursor-pointer hover:text-red-600" />
                    <FaTrash className="cursor-pointer hover:text-red-600" />
                  </div>
                </div>
              ))}

              {steps.length > 1 && (
                <div className="absolute top-6 left-5 bottom-6 w-0.5 bg-gray-300 z-0 ml-1.5" />
              )}
            </div>
          </div>
        </div>
      </div>
    )}
      </div>
    </>
  );
}

export default Camp;
