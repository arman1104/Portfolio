import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";

import { TiWeatherCloudy } from "react-icons/ti";
import { FcGlobe } from "react-icons/fc";
import { FaVrCardboard } from "react-icons/fa";

import { IoMail } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const cvLink =
  "https://drive.google.com/uc?export=download&id=1V976Y-It2xDWZYeEWmVfWD-EpiD0NO-f";

export const skills = [
  { id: 1, name: "HTML", icon: <FaHtml5 color="#E34F26" size="2rem" /> },
  { id: 2, name: "CSS", icon: <FaCss3Alt color="#1572B6" size="2rem" /> },
  { id: 3, name: "JavaScript", icon: <FaJs color="#F7DF1E" size="2rem" /> },
  { id: 4, name: "React JS", icon: <FaReact color="#61DAFB" size="2rem" /> },
  {
    id: 5,
    name: "Tailwind CSS",
    icon: <SiTailwindcss color="#38B2AC" size="2rem" />,
  },
  {
    id: 6,
    name: "Responsive Design",
    icon: <MdPhoneIphone color="#4A90E2" size="2rem" />,
  },
];

export const projects = [
  {
    id: 1,
    name: "Weather App",
    description:
      "A weather application that provides real-time weather information including temperature, humidity, and wind speed for any city or country.",
    icon: <TiWeatherCloudy size="3rem" color="#5AB2FF" />,
    project_link: "https://weather1-app.vercel.app/",
    github_link: "https://github.com/arman1104/Weather-App",
  },
  {
    id: 2,
    name: "Vision VR",
    description:
      "An easily designed web-based platform for Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
    icon: <FaVrCardboard size="3rem" color="#1F509A" />,
    // icon: <FaVrCardboard size="3rem" color="#38B2AC" />,
    project_link: "https://vision-vr.vercel.app/",
    github_link: "https://github.com/arman1104/Vision-VR",
  },
  {
    id: 3,
    name: "Globe Info",
    description:
      "A web-based application providing detailed information about countries including flags, capitals, population,language spoken and currency.",
    icon: <FcGlobe size="3rem" />,
    project_link: "https://globe-infos.vercel.app/",
    github_link: "https://github.com/arman1104/Globe-Info",
  },
];

export const footer = [
  {
    id: 1,
    icon: <IoMail size={"1.7rem"} />,
    link: "mailto:arman051215@gmail.com",
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/arman-khan-322bb6213/",
  },

  {
    id: 3,
    icon: <FaXTwitter />,
    link: "https://x.com/ArmanKhan1104",
  },
];
