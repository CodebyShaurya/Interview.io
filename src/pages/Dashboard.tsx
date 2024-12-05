import React, { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const Dashboard: React.FC = () => {
  const [showBarChart, setShowBarChart] = useState(true);

  // Dummy Data for Charts
  const barChartData = {
    labels: ["Test 1", "Test 2", "Test 3", "Test 4"],
    datasets: [
      {
        label: "Scores",
        data: [5, 6, 8, 9],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const pieChartData = {
    labels: ["JavaScript", "Python", "Java", "C++"],
    datasets: [
      {
        label: "Tests by Language",
        data: [40, 25, 20, 15],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#2f1d64] via-[#1b2a5c] to-[#2f1d64] text-white p-6">
      {/* Header */}
      {/* <header className="bg-opacity-80 bg-black shadow-md p-6 rounded-md flex justify-between items-center">
        <h1 className="text-3xl font-extrabold">Interview.io Dashboard</h1>
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded text-white shadow-md hover:opacity-90">
          Start New Test
        </button>
      </header> */}




      <div className=" grid grid-cols-1 xl:grid-cols-4 ">
      <div className="p-6 mt-1">
{/* Left: User Profile */}
<section className="bg-opacity-80 bg-black shadow-md p-6 rounded-lg ">
          <h2 className="text-2xl font-bold mb-6">User Profile</h2>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gray-600 rounded-full flex items-center justify-center text-3xl font-bold">
              JD
            </div>
            <div>
              <p className="text-lg font-semibold">John Doe</p>
              <p className="text-sm text-gray-400">john.doe@example.com</p>
              <p className="text-sm text-green-400">Verified</p>
            </div>
          </div>
          <div className="mb-6">
            <p className="text-gray-300 text-sm">
              A passionate developer specializing in building scalable, user-centric applications with React and Node.js.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/johndoe/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline text-sm"
          >
            LinkedIn Profile
          </a>
        </section>
        </div>

        <div className="xl:col-span-3">
        <div className="mt-8  gap-6">
        

        {/* Right: Test Recommendations */}
        <div className="grid grid-cols-1 xl:grid-cols-2 ">
        
        <section className="bg-opacity-80 bg-black shadow-md p-6 rounded-lg m-5 mt-1 ">
          <h2 className="text-2xl font-bold mb-6">Test Recommendations</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
              Focus on Backend
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
              Suggested for XYZ Company
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 bg-teal-500 rounded-full"></span>
              Practice Algorithms
            </li>
          </ul>
          </section>
          
       

        {/* Analytics Section */}
        <section className="bg-opacity-80 bg-black shadow-md p-6 rounded-lg m-5 mt-1">
          <h2 className="text-2xl font-bold mb-6">Analytics</h2>
          <div className="flex items-center space-x-4 mb-4">
            <button
              onClick={() => setShowBarChart(true)}
              className={`px-4 py-2 rounded text-sm ${
                showBarChart ? "bg-blue-600" : "bg-gray-700 hover:bg-blue-500"
              }`}
            >
              Growth (Bar Chart)
            </button>
            <button
              onClick={() => setShowBarChart(false)}
              className={`px-4 py-2 rounded text-sm ${
                !showBarChart ? "bg-blue-600" : "bg-gray-700 hover:bg-blue-500"
              }`}
            >
              Test Languages (Pie Chart)
            </button>
          </div>
          <div className="h-64">
            {showBarChart ? <Bar data={barChartData} /> : <Pie data={pieChartData} />}
          </div>
        </section> 
              </div>


        {/* Historical Data */}
        <section className="bg-opacity-80 h-[80vh] bg-black shadow-md p-6 rounded-lg xl:col-span-3">
  <h2 className="text-2xl font-bold mb-6">Historical Data</h2>
  <div className="overflow-x-auto">
    <table className="min-w-full table-auto border-collapse border border-gray-700 text-sm">
      <thead>
        <tr className="bg-gradient-to-r from-blue-700 to-indigo-800 text-left text-white">
          <th className="py-3 px-6 border-b border-gray-600">Domain</th>
          <th className="py-3 px-6 border-b border-gray-600">Date</th>
          <th className="py-3 px-6 border-b border-gray-600">Score</th>
          <th className="py-3 px-6 border-b border-gray-600">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr className="hover:bg-gray-800">
          <td className="py-3 px-6 border-b border-gray-700">Frontend</td>
          <td className="py-3 px-6 border-b border-gray-700">2024-12-01</td>
          <td className="py-3 px-6 border-b border-gray-700">8/10</td>
          <td className="py-3 px-6 border-b border-gray-700">
            <button className="text-blue-400 hover:underline">Review</button>
          </td>
        </tr>
        <tr className="hover:bg-gray-800">
          <td className="py-3 px-6 border-b border-gray-700">Backend</td>
          <td className="py-3 px-6 border-b border-gray-700">2024-11-15</td>
          <td className="py-3 px-6 border-b border-gray-700">7/10</td>
          <td className="py-3 px-6 border-b border-gray-700">
            <button className="text-blue-400 hover:underline">Review</button>
          </td>
        </tr>
        <tr className="hover:bg-gray-800">
          <td className="py-3 px-6 border-b border-gray-700">Full Stack</td>
          <td className="py-3 px-6 border-b border-gray-700">2024-11-01</td>
          <td className="py-3 px-6 border-b border-gray-700">9/10</td>
          <td className="py-3 px-6 border-b border-gray-700">
            <button className="text-blue-400 hover:underline">Review</button>
          </td>
        </tr>
        <tr className="hover:bg-gray-800">
          <td className="py-3 px-6 border-b border-gray-700">Data Structures</td>
          <td className="py-3 px-6 border-b border-gray-700">2024-10-20</td>
          <td className="py-3 px-6 border-b border-gray-700">8.5/10</td>
          <td className="py-3 px-6 border-b border-gray-700">
            <button className="text-blue-400 hover:underline">Review</button>
          </td>
        </tr>
        <tr className="hover:bg-gray-800">
          <td className="py-3 px-6 border-b border-gray-700">Algorithms</td>
          <td className="py-3 px-6 border-b border-gray-700">2024-10-01</td>
          <td className="py-3 px-6 border-b border-gray-700">7.5/10</td>
          <td className="py-3 px-6 border-b border-gray-700">
            <button className="text-blue-400 hover:underline">Review</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

      </div>

          </div>
      </div>

      {/* Main Content */}
      
    </div>
  );
};

export default Dashboard;
