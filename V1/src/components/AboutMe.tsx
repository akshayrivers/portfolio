import React from 'react';
import profilepic from '../IMG_3606_2.jpeg.jpg';

function AboutMe() {
  return (
    <section className="mx-auto flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 py-10 bg-gray-950 bg-opacity-50 border-l-4 border-purple-600 rounded-md shadow-lg">
      {/* About Me Content */}
      <div className="text-left max-w-xl mb-6 lg:mb-0 lg:mr-8">
        <h1 className="text-shadow text-4xl md:text-5xl lg:text-6xl font-bold text-teal-900">
          About Me
        </h1>
        <p className="mt-4 text-base md:text-lg">
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
          release of Letraset sheets containing Lorem Ipsum passages, and more recently with
          desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          
          Why do we use it? It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of using Lorem Ipsum is
          that it has a more-or-less normal distribution of letters, as opposed to using 'Content
          here, content here', making it look like readable English. Many desktop publishing
          packages and web page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
          versions have evolved.
        </p>
      </div>
      
      {/* Image aligned to the right */}
      <div className="flex-shrink-0">
        <img
          className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mask mask-circle object-cover"
          src={profilepic}
          alt="Profile"
        />
      </div>
    </section>
  );
}

export default AboutMe;
