import React from "react";

const ExperienceSection = () => {
  const dataExperience = [
    {
      title: "Frontend Web Developer (Internship)",
      organization: "PT. Len Industri",
      date: "Feb 2023 - Now",
      desc: ["Reactjs, Microfrontends, JWT, WebSocket, Chartjs, Git, Github, Scrum", "Public Speaking, Team Work, Disscussion, Self Learning"],
    },
    {
      title: "Front-End Engineering (Internship)",
      organization: "Ruangguru",
      date: "Nov 2022 - Dec 2022 5 mos",
      desc: [
        "Learn Thinking Skills, Project Management Tech, Communication, and Presentation Skills",
        "Learn Software Engineering (SDLC, Network, Algorithm, Version Control, IDE/ Code Editor, Terminal)",
        "Learn HTML5, CSS3, and Tailwind CSS",
        "Learn Javascript (OOP, Async , Modular Function)",
      ],
    },
    {
      title: "Front-End Web Developer | IDCAMP 2022 (Apprenticeship)",
      organization: "Indosat Ooredoo Hutchison Digital Camp (Online Course)",
      date: "May 2022 - Dec 2022 · 8 mos",
      desc: ["Learn JavaScript Programming Basics", "Learn Basic Web Programming", "Learn to Create Front-End for Beginners"],
    },
    {
      title: "Laboratory Assistant",
      organization: "Amikom Purwokerto University",
      date: "Sep 2021 - Feb 2022 · 6 mos",
      desc: ["Assisting lecturers in the practicum implementation process", "Participate in the development of practicum materials", "Maintain and maintain laboratory equipment and cleanliness."],
    },
    {
      title: "Electrical Maintenance Engineer (Internship)",
      organization: "LG Service Center",
      date: "Feb 2019 - Apr 2019 · 3 mos",
      desc: ["Learn JavaScript Programming Basics", "Learn Basic Web Programming", "Learn to Create Front-End for Beginners"],
    },
  ];
  return (
    <div id="experience" className="container mx-auto  mt-10">
      <div className="education-section flex justify-center items-center">
        <div className="education-content-1">
          {dataExperience.map((experience, id, arr) => (
            <div key={id} className="education-data grid grid-cols-[auto] mb-5 xl:mb-0 xl:grid-cols-[1fr_max-content_1fr] gap-0 xl:gap-6  ">
              {(id + 1) % 2 !== 0 && (
                <>
                  <div></div>
                  <div>
                    <span className="education-rounder hidden xl:inline-block bg-sky-400"></span>
                    {id + 1 !== arr.length && <span className="education-line translate-x-[6px] -translate-y-[7px] hidden xl:block w-[2px] h-full bg-sky-400"></span>}
                  </div>
                </>
              )}
              <div key={id} className={`bg-white text-black dark:bg-slate-900 dark:text-white shadow-md p-5 shadow-sky-400 rounded-lg`}>
                <h2 className="education-title font-semibold text-lg">{experience.title}</h2>
                <h2 className="education-subtitle inline-block mb-1">{experience.organization}</h2>
                <p className="education-calender font-medium text-slate-700 dark:text-slate-400 mb-1">{`📆 ${experience.date}`}</p>
                <ul className="font-light text-sm pl-5 list-disc">
                  {experience.desc.map((waktu, id) => (
                    <li key={id}>{waktu}</li>
                  ))}
                </ul>
              </div>
              {(id + 1) % 2 === 0 && id + 1 !== arr.length && (
                <div>
                  <span className="education-rounder  hidden xl:inline-block bg-sky-400"></span>
                  <span className="education-line translate-x-[6px] -translate-y-[7px] hidden xl:block w-[2px] h-full bg-sky-400"></span>
                </div>
              )}
              {id + 1 === arr.length && (id + 1) % 2 === 0 && (
                <div className="">
                  <span className="education-rounder  hidden xl:inline-block bg-sky-400"></span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
