import React from 'react'

export default function JobPostedCard() {
  return (
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
  </div>  )
}
