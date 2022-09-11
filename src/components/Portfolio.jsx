import React from "react";
// import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
// import installNode from "../assets/portfolio/installNode.jpg";
// import navbar from "../assets/portfolio/navbar.jpg";
// import reactParallax from "../assets/portfolio/reactParallax.jpg";
// import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
// import reactWeather from "../assets/portfolio/reactWeather.jpg";
import uc from "../assets/portfolio/uc.png";
import shop from "../assets/portfolio/shop.png";
import mode from "../assets/portfolio/mode.png";
import bitrix from "../assets/portfolio/bitrix.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: uc,
      title: "Urban Company Website",
      git: "https://github.com/HemanthKumar-CN/melted-lace-627",
      live: "https://urban-clap-clone.netlify.app/",
      Des: "Urban company is an online webapp to get expert local services such as repair services, grooming services etc... The company has separate app for mobile users and our cloned version is for laptop and tablet users.",
      backend:
        "https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white",
    },
    {
      id: 2,
      src: bitrix,
      title: "Bitrix24.net Website",
      git: "https://github.com/HemanthKumar-CN/psychotic-cars-5822-Bitrix24.net",
      live: "https://bitrix-24.netlify.app/",
      Des: "Bitrix24 is a task management app wherein users signup and login and their details are stored in mongo database. The password of user is stored in database in hashed format. CRUD functions can be done on tasks created by user.",
      backend:
        "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
    },
    {
      id: 3,
      src: mode,
      title: "Modesens Website",
      git: "https://github.com/VishalBhuse/Modesens",
      live: "https://modesensteamclone.netlify.app/",
      Des: "ModeSens is an fashion shopping assistant for the smart and informed. ModeSens is led by a team of industry experts who developed a solution to the disconnected and crowded online shopping experience.",
      backend:
        "https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white",
    },
    // {
    //   id: 4,
    //   src: mode,
    //   title: "Modesens Website Clone",
    //   git: "https://github.com/VishalBhuse/Modesens",
    //   live: "https://modesensteamclone.netlify.app/",
    //   Des: "ModeSens is an fashion shopping assistant for the smart and informed. ModeSens is led by a team of industry experts who developed a solution to the disconnected and crowded online shopping experience.",
    // },
  ];

  return (
    <div
      name="project"
      style={{ border: "1px  red" }}
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          {/* <p className="py-6">Check out some of my work right here</p> */}
        </div>

        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0"
          style={{ border: "1px  white" }}
        >
          {portfolios.map(({ id, src, title, git, live, Des, backend }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <br />
              <div className="font-black text-center text-lg">{title}</div>
              <br />
              <div className="px-5">
                <p className="text-justify 	">{Des}</p>
              </div>
              <br />
              <div className="flex justify-center">
                <img
                  src="https://img.shields.io/badge/react-%2320232a.svg?logo=react&logoColor=%2361DAFB&style=for-the-badge"
                  alt="badge"
                />
                <img src="https://img.shields.io/badge/chakra-%234ED1C5.svg?logo=chakraui&logoColor=white&style=for-the-badge" />
                <img src={backend} />
              </div>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:bg-slate-50 hover:text-black">
                  <a href={live} rel="noreferrer" target="_blank">
                    Live
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:bg-slate-50	hover:text-black">
                  <a href={git} rel="noreferrer" target="_blank">
                    Git
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
