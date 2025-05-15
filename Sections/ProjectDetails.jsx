import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then(res => res.json())
      .then(data => {
        const foundProject = data.find(p => p.id.toString() === id);
        setProject(foundProject);
      })
      .catch(err => console.error('Error fetching project details:', err));
  }, [id]);

  if (!project) return <p className="text-center mt-10">Loading project...</p>;

  return (
    <div className="max-w-5xl mx-auto bg-white  px-4 py-8">
      <div className=' mx-auto mt-12 bg-white '>
      <h1 className="text-4xl font-bold text-center text-gray-800 py-7 ">
        {project.title}
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 space-y-4">
          <p className="text-gray-700">
            <strong>Description:</strong> {project.description}
          </p>
          <p className="text-gray-700">
            <strong>Department:</strong> {project.department}
          </p>
          <p className="text-gray-700">
            <strong>Status:</strong> {project.status}
          </p>
          <p className="text-gray-700">
            <strong>Technologies Used:</strong> {project.technologies.join(", ")}
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="flex-shrink-0">
          <img
            src={`http://localhost:5000${project.image}`}
            alt={project.title}
            className="w-80 h-60 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t pt-6 space-y-4">
    
          <div>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-lg "
            >
              🔗 Visit Live Project
            </a>
          </div>


        {/* Team Members */}
        <div>
          <p className="text-gray-700">
            <strong>Team Members: </strong> {project.teamMembers.join(", ")}
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
