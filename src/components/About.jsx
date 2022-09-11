import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-1">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
          Innovative, task-driven professional Web developer able to build a Web
          presence from the ground up - from concept, navigation, layout and
          programming to UX and SEO.
          <br />
          Skilled at writing well-designed, testable and efficient code using
          current best practices in Web development.
          <br />
          Fast learner, hard worker and team player who is proficient in an
          array of tech stacks.
        </p>

        <br />
      </div>
    </div>
  );
};

export default About;
