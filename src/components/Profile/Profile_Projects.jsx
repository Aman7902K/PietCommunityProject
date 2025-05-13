import React from 'react'

export default function Profile_Projects() {
  return (
    <>
                    <div className="projects-section p-6 bg-blue-100 rounded-lg shadow-md w-[100%] ml-6">
                <h2 className="text-xl font-bold mb-4">Projects</h2>
                <ul className="project-list space-y-4">
                    <li className="project-item p-4 bg-white rounded shadow">
                        <h3 className="font-semibold text-lg">Project 1</h3>
                        <p className="text-gray-600">Description of project 1.</p>
                    </li>
                    <li className="project-item p-4 bg-white rounded shadow">
                        <h3 className="font-semibold text-lg">Project 2</h3>
                        <p className="text-gray-600">Description of project 2.</p>
                    </li>
                    <li className="project-item p-4 bg-white rounded shadow">
                        <h3 className="font-semibold text-lg">Project 3</h3>
                        <p className="text-gray-600">Description of project 3.</p>
                    </li>
                </ul>
            </div>
    </>
  )
}
