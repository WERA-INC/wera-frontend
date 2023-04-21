import React, { useState } from "react";

const JobPosted = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);

    // Fetch data here using the searchTerm
    fetch("/opportunities",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="ml-32">
      <div class="py-8"></div>
      <form>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
          <input
            type="search"
            id="default-search"
            class="block ml-80 w-1/2 p-2 pl-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleInputChange}
            required
          />
          <button
            type="submit"
            class="text-white absolute right-1/4 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-xs px-3 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      
      <div class="max-w-sm mx-auto my-8 rounded overflow-hidden shadow-lg bg-gray-100">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Full Stack Developer</div>
          <p class="text-gray-700 text-base">
            The Full Stack Engineer job description includes using a range of
            different technologies and languages (such as Java, JavaScript,
            HTML, PHP, C#)
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Salary 1500usd
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Part time
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            On Site
          </span>
        </div>
      </div>

      <div class="max-w-sm mx-auto my-8 rounded overflow-hidden shadow-lg bg-gray-100">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Product Designer</div>
          <p class="text-gray-700 text-base">
            We are looking for a Product Designer to work on various products we
            develop for our customers. Product Designer responsibilities include
            defining product specifications.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Salary 800usd
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Full time
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Remote
          </span>
        </div>
      </div>

      <div class="max-w-sm mx-auto my-8 rounded overflow-hidden shadow-lg bg-gray-100">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Front End Developer</div>
          <p class="text-gray-700 text-base">
            We are looking for a qualified Front-end developer to join our IT
            team. You will be responsible for building the client-side of our
            web applications.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Salary 900usd
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Full time
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            On Site
          </span>
        </div>
      </div>
    </div>
  );
};

export default JobPosted;
