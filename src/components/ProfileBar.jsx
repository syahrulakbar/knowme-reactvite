import { useState } from "react";
import Swal from "sweetalert2";
import ProfilePicture from "../assets/images/profile-picture-2.webp";
import ProfilePicturePng from "../assets/images/profile-picture-2.png";
import DetailPicturePng from "../assets/images/detail-profile.png";
import "../config/particles-config";
import "../config/particles-dark";

const ProfileBar = () => {
  const [pictureView, setpictureView] = useState(0);

  const detailImage = () => {
    if (pictureView === 0) {
      setpictureView(pictureView + 1);
    }
    Swal.fire({
      imageUrl: `${DetailPicturePng}`,
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: "Profile Picture",
      showConfirmButton: false,
    });
  };

  return (
    <div id="head-profile" className=" transition duration-150 ease-in-out flex flex-wrap xl:flex-nowrap  w-full   relative">
      <div id="particles-js" className={`transition duration-150 ease-in-out w-[100%] h-[100%] absolute top-0 left-0 -z-20`}></div>
      <div id="particles-dark" className={`transition duration-150 ease-in-out w-[100%] h-[100%] absolute top-0 left-0 -z-20`}></div>

      <div id="profile-image" className="w-[100%] lg:w-[100%] xl:w-[30%] mx-4">
        <div className="relative image-profile flex justify-center xl:justify-end">
          <picture className="flex justify-center xl:justify-end">
            <source type="image/webp" media="(min-width: 600px)" srcSet={ProfilePicture} />
            <source type="image/png" media="(max-width: 600px)" srcSet={ProfilePicturePng} />
            <img
              id="profile-picture"
              loading="lazy"
              width={"200px"}
              height="200px"
              onClick={detailImage}
              src={ProfilePicturePng}
              alt="Profile Picture"
              className={`${pictureView === 1 ? "" : "border-red-500/70"} w-[40%] cursor-pointer rounded-full border-4  `}
            />
          </picture>
        </div>
      </div>
      <div id="profile-desc" className="w-full xl:w-[70%]">
        <div className="desc-profile flex flex-wrap justify-center xl:justify-start">
          <h1 className="xl:text-3xl text-2xl text-center  xl:text-left font-medium w-full">Mochamad Syahrul Akbar</h1>
          <h2 id="status" className="font-light text-center  xl:text-left">
            Student | <span className="font-normal">Junior Front-End Web</span>
          </h2>
          <div className={`w-full flex justify-center xl:justify-start pt-2 text-slate-900 dark:text-white `}>
            <div id="contact-logo" className="flex  mb-5">
              {/* <!-- Github --> */}
              <a
                href="https://github.com/syahrulakbar"
                aria-label="view my github"
                target="_blank"
                className="w-9 h-9 mr-3 rounded-full flex items-center justify-center border  border-slate-300 hover:border-sky-400 hover:bg-sky-400 hover:text-white"
              >
                <svg className="fill-current" width="20" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              {/* <!-- Linkedin --> */}
              <a
                href="https://www.linkedin.com/in/mochamad-syahrul-akbar-904409225/"
                target="_blank"
                aria-label="view my linkedin"
                className="linkedin w-9 h-9 mr-3 rounded-full flex items-center justify-center border  border-slate-300 hover:border-sky-400 hover:bg-sky-400 hover:text-white"
              >
                <svg className="fill-current" width="20" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>LinkedIn</title>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* <!-- Email --> */}
              <a
                href="mailto:07tav2akbar@gmail.com"
                aria-label="contact me via email"
                target="_blank"
                className="email w-9 h-9 mr-3 rounded-full flex items-center justify-center border  border-slate-300 hover:border-sky-400 hover:bg-sky-400 hover:text-white"
              >
                <svg className="fill-current" width="20" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>Gmail</title>
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                </svg>
              </a>
              {/* <!-- Whatsapp --> */}
              <a
                href="https://wa.me/+6281548962893"
                aria-label="contact me via whatsapp"
                target="_blank"
                className="wa w-9 h-9 mr-3 rounded-full flex items-center justify-center border  border-slate-300 hover:border-sky-400 hover:bg-sky-400 hover:text-white"
              >
                <svg className="fill-current" width="20" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>WhatsApp</title>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
              {/* <!-- Instagram --> */}
              <a
                href="https://www.instagram.com/sepatukuhitamkotor/"
                target="_blank"
                aria-label="view my instagram"
                className="instagram w-9 h-9 mr-3 rounded-full flex items-center justify-center border  border-slate-300 hover:border-sky-400 hover:bg-sky-400 hover:text-white"
              >
                <svg className="fill-current" width="20" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>Instagram</title>
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>
              {/* <!-- CV --> */}
              <a
                href="https://github.com/syahrulakbar/mochamad_syahrul_akbar-final_project/raw/main/assets/My-Resume.pdf"
                target="_blank"
                aria-label="download my resume"
                className="w-9 h-9 mr-3 rounded-full flex items-center justify-center border   border-slate-300 hover:border-sky-400 hover:bg-sky-400 hover:text-white"
              >
                <svg className="fill-current" width="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 232V334.1l31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31V232c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
                </svg>
              </a>
            </div>
          </div>
          <h2 className="font-medium text-lg  text-left">About Me</h2>
          <p className="font-light">I am a student majoring in computer engineering, interested in the field of front end web developer who is very passionated about improving my coding skills.</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileBar;
