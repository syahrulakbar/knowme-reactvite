import React from "react";
import OntimePicture from "../assets/images/Ontime.webp";
import LandingPage from "../assets/images/landing-page-1.webp";
import Bookshelf from "../assets/images/bookshelf-1.webp";
import Nobarkuy from "../assets/images/nobarkuy-preview-1.webp";
import Warkopbae from "../assets/images/warkopbae.webp";
import OntimePicturePng from "../assets/images/Ontime.png";
import LandingPagePng from "../assets/images/landing-page-1.png";
import BookshelfPng from "../assets/images/bookshelf-1.png";
import NobarkuyPng from "../assets/images/nobarkuy-preview-1.png";
import WarkopbaePng from "../assets/images/warkopbae.png";
import Airbnb from "../assets/images/airbnb.png";
import VcsPng from "../assets/images/vcsimg.png";

const ProjectSection = () => {
  const dataProjects = [
    {
      title: "Ontime | To-Do List Apps",
      desc: "Website Movie Catalogue",
      tech: ["Java", "Firebase"],
      img: OntimePicture,
      imgPng: OntimePicturePng,
      link: "https://play.google.com/store/apps/details?id=com.catatanku.ontime",
    },
    {
      title: "Ontime | Website Landing Page",
      desc: "Website Movie Catalogue",
      tech: ["HTML5", "CSS3", "Javascript"],
      img: LandingPage,
      imgPng: LandingPagePng,
      link: "https://ontimeapp.netlify.app/",
    },
    {
      title: "Bookshelf Apps",
      desc: "Website Movie Catalogue",
      tech: ["HTML5", "CSS3", "Javascript"],
      img: Bookshelf,
      imgPng: BookshelfPng,
      link: "https://bookshelf-apps-dicoding.netlify.app/",
    },
    {
      title: "Nobarkuy | Website Movie Catalogue",
      desc: "Website Movie Catalogue",
      tech: ["React JS", "Tailwind CSS"],
      img: Nobarkuy,
      imgPng: NobarkuyPng,
      link: "https://web-movie-react-js.vercel.app/",
    },
    {
      title: "WarkopBae | Website Restaurant Catalogue",
      desc: "Website Movie Catalogue",
      tech: ["Javascript", "PWA", "Webpack"],
      img: Warkopbae,
      imgPng: WarkopbaePng,
      link: "https://warkopbae-v3-0.vercel.app",
    },
    {
      title: "VCS Server",
      desc: "Voice Control Server",
      tech: ["Reactjs", "Tailwind", "PostgreSQL", "ExpressJS"],
      img: VcsPng,
    },
    {
      title: "Airbnb Clone",
      desc: "Website Reservation",
      tech: ["NEXTJS 13", "Tailwind", "Mongodb", "Prisma"],
      img: Airbnb,
      link: "https://airbnb-clone-kohl-tau.vercel.app/",
    },
  ];

  return (
    <div id="project" className=" container  mt-10 ">
      <div
        id="project-content"
        className="flex flex-col  md:flex-row flex-wrap justify-center w-full"
      >
        {dataProjects.map((project, id) => (
          <a
            aria-label="link to my project"
            key={id}
            href={project?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-1/2"
          >
            <div
              className={`bg-white text-black dark:bg-slate-900 dark:text-white card relative mt-2 lg:m-3 rounded-lg shadow-md shadow-sky-400 h-[350px]`}
            >
              <div className="w-full h-[60%]">
                <picture>
                  <source type="image/webp" media="(min-width: 600px)" srcSet={project?.img} />
                  <source type="image/png" media="(max-width: 600px)" srcSet={project?.imgPng} />
                  <img
                    loading="lazy"
                    className="w-full h-full rounded-t-lg object-cover"
                    src={project.img}
                    alt={`${project.title} preview`}
                  />
                </picture>
              </div>
              <div id="project-title" className="w-full break-words">
                <div className="p-5">
                  <div className="w-full flex">
                    {project.tech.map((stack, id) => (
                      <h3
                        key={id}
                        className=" px-2 rounded-full border-2 border-sky-500 flex justify-center flex-wrap items-center mr-1"
                      >
                        {stack}
                      </h3>
                    ))}
                  </div>
                  <h2 className="font-semibold  text-md lg:text-lg mt-1 hover:text-sky-400 ease-in-out transition-all duration-75">
                    {project.title}
                  </h2>
                  <p className="font-normal">{project.desc}</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
