import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo,projectThree} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects" 
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="E-Portfolio"
          des=" Dynamic portfolio showcasing my creative projects and expertise in Web Development. Explore my work, skills, education, experience and achievements in a visually engaging and user-friendly interface"
          src={projectOne} gitlink={"www.google.com"} deploylink={"www.google.com"}
        />
        <ProjectsCard
          title="Real Estate"
          des="A versatile full-stack developer specializing in the MERN stack, I create dynamic and responsive web applications with a focus on clean, efficient code and intuitive user interfaces."
          src={projectTwo} gitlink={"https://github.com/18-shaijal/Real-Estate"} deploylink={"https://real-estate-taupe-gamma.vercel.app/"}
        />
        <ProjectsCard
          title="Media_Uploader"
          des="It is a backend Project which you have to upload your files in client server as well as Cloudinary (A media management platform)"
          src={projectThree} gitlink={"https://github.com/18-shaijal/Media_FileUploader"} deploylink={"#"}
        />
       
         
      
       
      </div>
    </section>
  );
}

export default Projects
