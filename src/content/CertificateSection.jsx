import React from "react";
import iconDicoding from "../assets/images/icon/ic-dicoding.png";
import iconRuangguru from "../assets/images/icon/ic-ruangguru.png";
import iconUdemy from "../assets/images/icon/ic-udemy.png";
import iconHackerRank from "../assets/images/icon/ic-hackerrank.png";
import iconLen from "../assets/images/icon/lenicon.png";

const CertificateSection = () => {
  const dataCertificate = [
    {
      img: iconLen,
      title: "Frontend Web Developer",
      organization: "PT LEN Industri (Persero)",
      date: "Issued July 2023 - No Expiration Date",
      url: "https://www.linkedin.com/in/mochamad-syahrul-akbar/",
    },
    {
      img: iconHackerRank,
      title: "React Basic",
      organization: "HackerRank",
      date: "Issued April 2023 - No Expiration Date",
      credential: "fd98673acda5",
      url: "https://www.hackerrank.com/certificates/fd98673acda5",
    },
    {
      img: iconRuangguru,
      title: "Frontend Web Development with React",
      organization: "Ruangguru",
      date: "Issued Nov 2022 - No Expiration Date",
      credential: "CERT-WLE3PGZD",
      url: "https://img.rk-certificate.com/MOCHAMADROLVW5XG/CERT-WLE3PGZD.jpg",
    },
    {
      img: iconRuangguru,
      title: "Assistant Mentor",
      organization: "Ruangguru",
      date: "Issued Dec 2022 - No Expiration Date",
      url: "https://drive.google.com/file/d/1CHAx4ebK4kPL-mkZ9mYKkBvjyW4C2Jvj/view",
    },
    {
      img: iconRuangguru,
      title: "Frontend Engineering Ruangguru Camp Batch 3",
      organization: "Ruangguru",
      date: "Issued Dec 2022 - No Expiration Date",
      url: "https://drive.google.com/file/d/1J2hINHqe-XXcRHwIODNYIMx1rzIsk4O0/view",
    },

    {
      img: iconDicoding,
      title: "Learn Basic Web Programming",
      organization: "Dicoding Indonesia",
      date: "Issued Aug 2022 - Exp Aug 2025",
      credential: "N9ZO7LY76ZG5",
      url: "https://www.dicoding.com/certificates/N9ZO7LY76ZG5",
    },
    {
      img: iconDicoding,
      title: "Learn to Create Front-End Web for Beginners",
      organization: "Dicoding Indonesia",
      date: "Issued Aug 2022 - Exp Aug 2025",
      credential: "1OP86OG01XQK",
      url: "https://www.dicoding.com/certificates/1OP86OG01XQK",
    },
    {
      img: iconDicoding,
      title: "Learn Front-End Web Development Fundamentals",
      organization: "Dicoding Indonesia",
      date: "Issued Oct 2022 - Exp Oct 2025",
      credential: "N9ZO47O48ZG5",
      url: "https://www.dicoding.com/certificates/N9ZO47O48ZG5",
    },
    {
      img: iconDicoding,
      title: "Learn Front-End Web Development Expert",
      organization: "Dicoding Indonesia",
      date: "Issued Dec 2022 - Exp Dec 2025",
      credential: "1OP854V42PQK",
      url: "https://www.dicoding.com/certificates/1OP854V42PQK",
    },
    {
      img: iconDicoding,
      title: "Learn Javascript Programming Basic",
      organization: "Dicoding Indonesia",
      date: "Issued Oct 2022 - Exp Oct 2025",
      credential: "L4PQ63GGOPO1",
      url: "https://www.dicoding.com/certificates/L4PQ63GGOPO1",
    },
    {
      img: iconDicoding,
      title: "Learn SOLID Programming Principles",
      organization: "Dicoding Indonesia",
      date: "Issued Sep 2022 - Exp Sep 2025",
      credential: "ERZRM63KWPYV",
      url: "https://www.dicoding.com/certificates/ERZRM63KWPYV",
    },
    {
      img: iconDicoding,
      title: "Getting Started Programming With Java",
      organization: "Dicoding Indonesia",
      date: "Issued Sep 2022 - Exp Sep 2025",
      credential: "1RXYM8G6QXVM",
      url: "https://www.dicoding.com/certificates/1RXYM8G6QXVM",
    },
    {
      img: iconDicoding,
      title: "Getting Started Programming With C",
      organization: "Dicoding Indonesia",
      date: "Issued Sep 2022 - Exp Sep 2025",
      credential: "72ZDOLG7JXYW",
      url: "https://www.dicoding.com/certificates/72ZDOLG7JXYW",
    },
    {
      img: iconUdemy,
      title: "Learn Web Development Using the PHP Programming Language",
      organization: "Udemy",
      date: "Issued Mei 2022 - No Expiration Date",
      credential: "UC-f012288c-cfec-4096-b0a2-db44d89292a3",
      url: "https://www.udemy.com/certificate/UC-f012288c-cfec-4096-b0a2-db44d89292a3/",
    },
  ];

  return (
    <div id="certificate" className="container mx-auto mt-10">
      <div id="certificate-content" className="w-full flex flex-wrap justify-center">
        {dataCertificate.map((certificate, id) => (
          <div
            key={id}
            className="w-full lg:m-2 lg:w-[40%] h-max flex shadow-md shadow-sky-400 rounded-lg"
          >
            <img
              src={certificate.img}
              loading="lazy"
              alt={`icon ${certificate.title}`}
              className="w-12 h-12 m-4 object-cover"
            />
            <div className="p-2">
              <a
                aria-label="link to my certificate"
                href={certificate.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="font-semibold hover:text-sky-400">{certificate.title}</h3>
              </a>
              <h4 className="font-normal">{certificate.organization}</h4>
              <p className="font-light text-sm">{certificate.date}</p>
              {certificate.credential && (
                <p className="font-light text-sm">{`Credential ID ${certificate?.credential}`}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificateSection;
