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

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: uc,
      title: "Urban Company Website Clone",
      git: "https://github.com/HemanthKumar-CN/melted-lace-627",
      live: "https://urban-clap-clone.netlify.app/",
    },
    {
      id: 2,
      src: shop,
      title: "Shop.com Website Clone",
      git: "https://github.com/mistrivishal/SHOP.COM-clone",
      live: "https://shop-com-clone-web17.netlify.app/",
    },
    {
      id: 3,
      src: mode,
      title: "Modesens Website Clone",
      git: "https://github.com/VishalBhuse/Modesens",
      live: "https://modesensteamclone.netlify.app/",
    },
  ];

  return (
    <div
      name="project"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title, git, live }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <br />
              <div className="font-black text-center	">{title}</div>
              <br />
              <div className="flex justify-center">
                <img
                  src="https://img.shields.io/badge/react-%2320232a.svg?logo=react&logoColor=%2361DAFB&style=for-the-badge"
                  alt="badge"
                />
                <img src="https://img.shields.io/badge/chakra-%234ED1C5.svg?logo=chakraui&logoColor=white&style=for-the-badge" />
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
