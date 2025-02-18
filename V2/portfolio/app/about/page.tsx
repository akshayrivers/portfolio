"use client";
import Navbar from "@/components/Navbar";
import Skills from "@/components/skills";

const About = () => {
  return (
    <div className="py-10 px-4 md:px-10">
      <Navbar color="orange" />

      {/* Title */}
      <h1 className="custom-font text-9xl text-amber-500 mb-8">About Me</h1>

      {/* About Section */}
      <p className="text-xl sigmar-regular text-gray-50 mb-4">
        I am a passionate web developer with a strong foundation in both front-end and back-end technologies. I have a keen eye for detail and a commitment to delivering high-quality, user-friendly websites. I am currently exploring new technologies and taking on exciting challenges in web and software development.
      </p>

      <p className="text-xl sigmar-regular text-gray-50 mb-4">
        I'm currently pursuing my BTech in Computer Science from NIT Srinagar, where I am developing my skills in programming, databases, and full-stack development. Whether it's building intuitive web interfaces or crafting robust back-end solutions, I'm excited by the process of creating functional, beautiful digital products.
      </p>

      <p className="text-xl sigmar-regular text-gray-50 mb-8">
        Beyond coding, I'm also passionate about storytelling. I write short stories that aim to evoke emotion and spark imagination. Tech and creativity go hand-in-hand for me, and I love blending both to build projects that tell a unique story.
      </p>

      <Skills />
    </div>
  );
};

export default About;
