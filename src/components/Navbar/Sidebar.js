import { FaUserSecret } from "react-icons/fa";
import { RiUserHeartLine, RiUserSmileFill } from "react-icons/ri";
import { BsCalendar3, BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { FaGifts } from "react-icons/fa";

export const sidebarData = [
  {
    title: "Wedding Invite",
    path: "/date",
    icon: <BsCalendar3 />,
  },
  {
    title: "Photo Shoot",
    path: "/photoshoot",
    icon: <BsFillEmojiHeartEyesFill />,
  },
  {
    title: "Gift",
    path: "/gift",
    icon: <FaGifts />,
  },
  // {
  //   title: "Oluwatosin",
  //   path: "/oluwatosin",
  //   icon: <RiUserSmileFill />,
  // },
  // {
  //   title: "Harrison",
  //   path: "/harrison",
  //   icon: <FaUserSecret />,
  // },
  // {
  //   title: "Couple",
  //   path: "/couple",
  //   icon: <RiUserHeartLine />,
  // },
];
