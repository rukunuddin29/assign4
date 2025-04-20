import React from "react";
import { FaUserFriends, FaChartLine, FaCamera, FaBullhorn } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
  {/* Total Promoters */}
  <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md">
    <div className="bg-amber-200 rounded-full w-12 h-12 flex items-center justify-center">
      <svg className="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 7a3 3 0 11-6 0 3 3 0 016 0zM4 14a4 4 0 018 0v1H4v-1z" />
      </svg>
    </div>
    <div>
      <div className="text-sm font-medium text-gray-500">Total Promoters</div>
      <div className="text-2xl font-bold text-gray-900">1,234</div>
      <div className="text-sm font-semibold text-green-500">+12%</div>
    </div>
  </div>

  {/* Conversion Rate */}
  <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md">
    <div className="bg-pink-100 rounded-full w-12 h-12 flex items-center justify-center">
      <span className="text-xl text-black">%</span>
    </div>
    <div>
      <div className="text-sm font-medium text-gray-500">Conversion rate</div>
      <div className="text-2xl font-bold text-gray-900">23.5%</div>
      <div className="text-sm font-semibold flex items-center text-red-500">
        -2.4% <span className="ml-1 text-gray-400 text-xs">vs last month</span>
      </div>
    </div>
  </div>

  {/* Revenue Generated */}
  <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md">
    <div className="bg-blue-200 rounded-full w-12 h-12 flex items-center justify-center">
      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
        <path d="M11 17a1 1 0 01-2 0v-1.09A6.002 6.002 0 015 6a1 1 0 112 0 4 4 0 104 4h-1a1 1 0 110-2h1a6.002 6.002 0 01-3.5 10.91V17z" />
      </svg>
    </div>
    <div>
      <div className="text-sm font-medium text-gray-500">Revenue Generated</div>
      <div className="text-2xl font-bold text-gray-900">$12,345</div>
      <div className="text-sm font-semibold text-green-500">+8.7%</div>
    </div>
  </div>

  {/* Active Campaigns */}
  <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md">
    <div className="bg-red-200 rounded-full w-12 h-12 flex items-center justify-center">
      <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 2a1 1 0 00-1 1v1H5a1 1 0 000 2h1v10H5a1 1 0 000 2h4a1 1 0 001-1v-1h3a1 1 0 001-1V6a1 1 0 00-1-1h-3V3a1 1 0 00-1-1H9zm2 5h2v6h-2V7z" />
      </svg>
    </div>
    <div>
      <div className="text-sm font-medium text-gray-500">Active Campaigns</div>
      <div className="text-2xl font-bold text-gray-900">3</div>
    </div>
  </div>
</div>



      {/* Mini Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MiniMetric label="Repeat Referral Rate" value="42%" color="green" />
        <MiniMetric label="Referral Engagement Rate" value="67%" color="red" />
        <MiniMetric label="Churn Rate of Leads" value="28%" color="blue" />
        <MiniMetric label="Upsell Rate of Leads" value="19%" color="purple" />
      </div>

      {/* Charts and Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Promoter Performance Over Time</h3>
          <div className="h-40 bg-gray-100 rounded flex items-center justify-center text-gray-400">
            Line Chart Placeholder
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold mb-2">Conversion Success Rate</h4>
            <div className="h-32 bg-gray-100 rounded flex items-center justify-center text-gray-400">
              Donut Chart
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold mb-2">Top Performing Channel</h4>
            <div className="flex justify-between">
              <ChannelStat label="Facebook" value="78%" color="bg-pink-100" />
              <ChannelStat label="Twitter" value="45%" color="bg-blue-100" />
              <ChannelStat label="LinkedIn" value="23%" color="bg-indigo-100" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white p-4 rounded-xl border border-gray-300">
  <h3 className="font-semibold mb-5 text-gray-800 text-xl">Recent Activities</h3>
  <div className="grid grid-cols-3 text-sm font-medium text-gray-600 mb-4">
    <span className="text-left">Activity</span>
    <span className="text-right">Date</span>
    <span className="text-right">Time</span>
  </div>
  <div className="grid gap-y-6">
    {[
      { activity: "Julian earned $10", date: "28-4-2024", time: "10:30 AM" },
      { activity: "John Doe signed up from your referral link", date: "29-4-2024", time: "9:45 AM" },
      { activity: "You reached 50 referrals milestone!", date: "30-4-2024", time: "8:20 AM" },
      { activity: "You updated your referral campaign", date: "31-4-2024", time: "7:00 AM" },
    ].map((item, i) => (
      <div key={i} className="grid grid-cols-3  text-gray-700">
        <span className="text-left">{item.activity}</span>
        <span className="text-right">{item.date}</span>
        <span className="text-right">{item.time}</span>
      </div>
    ))}
  </div>
</div>



      {/* Leaderboard Table */}
      <div className="bg-white p-4 rounded-xl border border-gray-300">
  <h3 className="font-semibold mb-5 text-xl text-gray-800">Leaderboard Table View</h3>
  <div className="overflow-auto">
    <table className="w-full text-sm text-left">
      <thead>
        <tr className="text-gray-600">
          <th className="px-4 py-2">Rank</th>
          <th className="px-4 py-2">Promoter Name</th>
          <th className="px-4 py-2">Conversion Rate</th>
          <th className="px-4 py-2">Referrals Sent</th>
          <th className="px-4 py-2">Successful Conversions</th>
          <th className="px-4 py-2">Revenue Generated</th>
        </tr>
      </thead>
      <tbody>
        {[
          ["1", "Emery Dokidis", "150", "80", "60%", "$1,200"],
          ["2", "Kadin Lipshutz", "132", "90", "65%", "$980"],
          ["3", "Randy Culhane", "110", "60", "60%", "$880"],
          ["4", "Jaxson Vaccaro", "100", "85", "75%", "$500"],
          ["5", "Jocelyn Levin", "50", "30", "63%", "$600"],
          ["6", "Maren Septimus", "80", "35", "25%", "$200"],
          ["7", "Haylie Saris", "120", "55", "45%", "$150"],
          ["8", "Randy Herwitz", "110", "90", "65%", "$880"],
        ].map((row, i) => (
          <tr key={i} className=" hover:bg-gray-100">
            {row.map((cell, j) => (
              <td key={j} className="px-4 py-3">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    </div>
  );
};

const StatCard = ({ icon, title, value, change, trend }) => (
  <div className="bg-white p-4 rounded shadow flex items-center gap-4">
    <div className="text-2xl text-gray-600">{icon}</div>
    <div>
      <p className="text-sm text-gray-500 font-medium">{title}</p>
      <h4 className="text-xl font-bold">{value}</h4>
      {change && (
        <p className={`text-xs mt-1 ${trend === "up" ? "text-green-500" : "text-red-500"}`}>
          {change} vs last month
        </p>
      )}
    </div>
  </div>
);

const MiniMetric = ({ label, value, color }) => (
  <div className="bg-white p-4 rounded shadow text-center">
    <p className="text-sm text-gray-500 mb-2 font-medium">{label}</p>
    <div className={`text-${color}-500 font-bold text-2xl`}>{value}</div>
  </div>
);

const ChannelStat = ({ label, value, color }) => (
  <div className={`rounded p-2 ${color} text-center w-1/3`}>
    <p className="text-xs font-semibold text-gray-700">{label}</p>
    <p className="text-base font-bold text-gray-900">{value}</p>
  </div>
);

export default Dashboard;
