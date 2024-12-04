import { useState } from "react";
import { FaBell, FaEnvelope, FaUserCircle } from "react-icons/fa";

const Dashboard = () => {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [emailsOpen, setEmailsOpen] = useState(false);

  const toggleNotifications = () => setNotificationsOpen(!notificationsOpen);
  const toggleEmails = () => setEmailsOpen(!emailsOpen);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#2f1d64] via-[#1b2a5c] to-[#2f1d64] flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
        <div className="flex items-center space-x-4">
          {/* Notifications Icon */}
          <div className="relative">
            <FaBell
              className="text-gray-600 text-2xl cursor-pointer"
              onClick={toggleNotifications}
            />
            {notificationsOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg p-4">
                <p>No new notifications</p>
              </div>
            )}
          </div>

          {/* Emails Icon */}
          <div className="relative">
            <FaEnvelope
              className="text-gray-600 text-2xl cursor-pointer"
              onClick={toggleEmails}
            />
            {emailsOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg p-4">
                <p>No new emails</p>
              </div>
            )}
          </div>

          {/* Profile Icon */}
          <FaUserCircle className="text-gray-600 text-2xl" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6">
        {/* Profile Card */}
        <section className="bg-white rounded-lg shadow-lg p-6 mb-6 max-w-sm">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
              <FaUserCircle className="text-4xl text-gray-600" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-800">John Doe</h2>
              <p className="text-sm text-gray-600">Software Engineer</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-gray-700">
              Welcome back! Here's an overview of your recent activity.
            </p>
          </div>
        </section>

        {/* Additional Sections */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Analytics */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-800">Analytics</h3>
            <ul className="text-sm text-gray-600">
              <li>Website Visits: 3,245</li>
              <li>New Signups: 112</li>
              <li>Conversion Rate: 4.5%</li>
            </ul>
          </div>

          {/* Reports */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-800">Reports</h3>
            <ul className="text-sm text-gray-600">
              <li>Daily Reports Generated: 15</li>
              <li>Pending Reports: 4</li>
              <li>Archived Reports: 132</li>
            </ul>
          </div>

          {/* Activity */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-800">Activity</h3>
            <ul className="text-sm text-gray-600">
              <li>Logged in: 2 hours ago</li>
              <li>Updated Profile: Yesterday</li>
              <li>Reviewed Reports: 3 times this week</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
