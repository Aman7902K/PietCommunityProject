import React from "react";

function AnnouncementCard({ announcement }) {
  const { profileImg, name, position, department, content, contentImg } = announcement;

  return (
    <div className="bg-gray-300 shadow-md p-4 rounded-lg max-w-md mx-auto my-4 hover:shadow-gray-400 ">
      {/* Header: Profile, Name, Position, Department */}
      <div className="flex items-center gap-4">
        <img
          src={profileImg}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border"
        />
        <div>
          <h2 className="text-lg font-semibold ">{name}</h2>
          <p className="text-sm text-gray-600 ">{position}</p>
          <p className="text-sm text-gray-500 ">{department}</p>
        </div>
      </div>

      {/* Content */}
      <div className="mt-4">
        <p className="text-gray-800">{content}</p>

        {/* Conditionally render the image only if contentImg exists */}
        {contentImg ? (
          <img
            src={contentImg}
            alt="Announcement"
            className="mt-2 rounded-md w-full object-cover"
            style={{ maxHeight: "300px", objectFit: "contain" }} // Optional styling to limit the image size
          />
        ) : (
          <div className="mt-2 h-64 bg-gray-200 rounded-md" />  // Placeholder when no image is present
        )}
      </div>
    </div>
  );
}

export default AnnouncementCard;
