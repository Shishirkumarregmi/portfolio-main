import React from "react";
import Project1 from "../public/assets/projects/project.jpg";
import slaabur from "../public/assets/projects/slaabur.jpg";
import FitnessFlow from "../public/assets/projects/fitnessflow.jpg";
import hdcr from "../public/assets/projects/hdcr.jpg";
import SnakeAndLadder from "../public/assets/projects/snakeandladder.jpg";
import ProjectItem from "./Projectitem";

const Projects = () => {
  return (
    <div id="projects" className="w-full p-2 py-16">
      <div className="max-w-[1240px] mx-auto px-2 py-8">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&#39;ve accomplished</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Monaural Multispeaker Speech Separation"
            backgroundImg={Project1}
            projectUrl="https://github.com/Shishirkumarregmi/perceparator"
            tech="Transformer, Python, Pytorch, Numpy"
          />
          <ProjectItem
            title="Handwritten Devanagari Character Recognition"
            backgroundImg={hdcr}
            projectUrl="https://github.com/Shishirkumarregmi/Handwritten-Devanagari-Character-Recognition"
            tech="Python, Tensorflow, Flask"
          />
           <ProjectItem
            title="Robotics building simulation and modeling using OpenCV"
            backgroundImg={Project1}
            projectUrl="https://github.com/Shishirkumarregmi/Handwritten-Devanagari-Character-Recognition"
            tech="openCV blender"
          />          
          
          <ProjectItem
            title="Snake and Ladder: 3D"
            backgroundImg={SnakeAndLadder}
            projectUrl="https://github.com/rijalsankalp/snake-and-ladder"
            tech="C++, OpenGL, GLUT"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
