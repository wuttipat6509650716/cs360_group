import Link from 'next/link';

const Profile = ({ profile }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 to-orange-900 p-16 flex justify-center items-center">
      <div className="bg-white w-full max-w-6xl p-10 rounded-lg shadow-lg relative">
        <Link href="/">
          <a className="absolute inline-flex items-center top-4 left-4 focus:outline-none">
            <img
              src="/arrow_back.png"
              alt="Back"
              className="w-6 h-6 mr-2 hover:opacity-80 transition duration-150 ease-in-out"
            />
            Back
          </a>
        </Link>
        <div className="flex items-center mb-8 mt-3">
          <img
            src="/account_circleBigest.png"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover mr-4"
          />
          <div>
            <h2 className="text-3xl font-bold">Full Name</h2>
            <p className="text-gray-600">Phone number</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Firstname</label>
            <input
              type="text"
              className="block w-full rounded-lg border border-gray-300 bg-gray-100 p-3 shadow-md focus:border-indigo-500 focus:ring-indigo-500 text-lg transition duration-300 ease-in-out transform hover:scale-105"
              placeholder="Your First Name"
              disabled
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Lastname</label>
            <input
              type="text"
              className="block w-full rounded-lg border border-gray-300 bg-gray-100 p-3 shadow-md focus:border-indigo-500 focus:ring-indigo-500 text-lg transition duration-300 ease-in-out transform hover:scale-105"
              placeholder="Your Last Name"
              disabled
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Nickname</label>
            <input
              type="text"
              className="block w-full rounded-lg border border-gray-300 bg-gray-100 p-3 shadow-md focus:border-indigo-500 focus:ring-indigo-500 text-lg transition duration-300 ease-in-out transform hover:scale-105"
              placeholder="Your Nick Name"
              disabled
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Gender</label>
            <input
              type="text"
              className="block w-full rounded-lg border border-gray-300 bg-gray-100 p-3 shadow-md focus:border-indigo-500 focus:ring-indigo-500 text-lg transition duration-300 ease-in-out transform hover:scale-105"
              placeholder="Gender"
              disabled
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Birthday</label>
            <input
              type="text"
              className="block w-full rounded-lg border border-gray-300 bg-gray-100 p-3 shadow-md focus:border-indigo-500 focus:ring-indigo-500 text-lg transition duration-300 ease-in-out transform hover:scale-105"
              placeholder="Birthday"
              disabled
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Age</label>
            <input
              type="text"
              className="block w-full rounded-lg border border-gray-300 bg-gray-100 p-3 shadow-md focus:border-indigo-500 focus:ring-indigo-500 text-lg transition duration-300 ease-in-out transform hover:scale-105"
              placeholder="Age"
              disabled
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Address</label>
            <input
              type="text"
              className="block w-full rounded-lg border border-gray-300 bg-gray-100 p-3 shadow-md focus:border-indigo-500 focus:ring-indigo-500 text-lg transition duration-300 ease-in-out transform hover:scale-105"
              placeholder="Address"
              disabled
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Phone number</label>
            <input
              type="text"
              className="block w-full rounded-lg border border-gray-300 bg-gray-100 p-3 shadow-md focus:border-indigo-500 focus:ring-indigo-500 text-lg transition duration-300 ease-in-out transform hover:scale-105"
              placeholder="Phone number"
              disabled
            />
          </div>
        </div>

        <div className="mt-8 flex justify-end space-x-4">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-lg">
            Edit
          </button>
          <button className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-lg">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
