import { FaUserSecret } from "react-icons/fa";
import { RiUserHeartLine, RiUserSmileFill } from "react-icons/ri";
import { BsCalendar3 } from "react-icons/bs";

export const sidebarData = [
  {
    title: "Save the Date",
    path: "/date",
    icon: <BsCalendar3 />,
  },
  {
    title: "Oluwatosin",
    path: "/oluwatosin",
    icon: <RiUserSmileFill />,
  },
  {
    title: "Harrison",
    path: "/harrison",
    icon: <FaUserSecret />,
  },
  {
    title: "Couples",
    path: "/couple",
    icon: <RiUserHeartLine />,
  },
];
