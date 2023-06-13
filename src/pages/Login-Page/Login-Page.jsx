import React from "react";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Login to Previewed</h1>
      <div className="bg-white shadow-md rounded px-8 py-6">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email address"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Log In
            </button>
            <div className="flex items-center">
              <span className="text-gray-600 mr-2">Or login with:</span>
              <button className="mr-2">
                <svg
                  className="w-6 h-6 fill-current text-gray-600 hover:text-blue-500"
                  viewBox="0 0 512 512"
                >
                  <path d="M492 256c0-136.9-111-248-248-248S0 119.1 0 256c0 112 72 207.4 172.1 242 12.6 2.3 17.3-5.5 17.3-12.2v-77.9c0-29.7-14.4-46.3-34.1-71.6C114 376.6 96 343.9 96 307c0-45.8 37.2-83 83-83h38V128H176C79.5 128 0 207.5 0 304s79.5 176 176 176h216c96.5 0 176-79.5 176-176 0-9.3-.7-18.6-2-27H492c9.4 0 20-7.1 20-16 0-52.9-43.1-96-96-96z" />
                </svg>
              </button>
              <button className="mr-2">
                <svg
                  className="w-6 h-6 fill-current text-gray-600 hover:text-blue-500"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M438.4 225.8H288V352h69.3l11.6-64H432v-49c0-15.4 5.5-29 18.4-39.6C456.9 182.7 469 178 482 178c16 0 29.4 1 42 3v59.8c-9.7-1-19.3-1.5-29-1.5zm-145 8V304h79.4c-1.6 9-6.6 16.5-15 21.5-8.8 5-18.6 7.5-29 7.5-18.7 0-33.7-7-44.7-21-8-9-12-20-12-33.5 0-17.6 6.5-31 19.5-41 13-10 30.8-15 53-15 10.3 0 19.5 2 28 6.2 9.5 4.3 17 10.5 22.4 18.8 5.5 8.4 8.2 18.7 8.2 31.2 0 14.7-5.2 26.3-16.6 36-11.4 9.7-28.4 14.5-51.8 14.5H293zm208 1.8H480V176H354.2c32 35 48 69 48 103.8 0 4.5-.7 9.3-2 14zm0 0"
                  />
                  <path
                    d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0 0 114.6 0 256s114.6 256 256 256zm0-33c-124.6 0-225-100.4-225-224S131.4 31 256 31s225 100.4 225 224-100.4 224-225 224zm0 0"
                  />
                </svg>
              </button>
              <button>
                <svg
                  className="w-6 h-6 fill-current text-gray-600 hover:text-blue-500"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M484 180H356V70c0-13.3-10.7-24-24-24h-56c-13.3 0-24 10.7-24 24v110H28c-7.7 0-14 6.3-14 14v218c0 7.7 6.3 14 14 14h456c7.7 0 14-6.3 14-14V194c0-7.7-6.3-14-14-14zm-14 218H42V218h428v180zm0 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
