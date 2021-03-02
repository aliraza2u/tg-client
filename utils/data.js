import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {HomeOutlined, NavigateBeforeOutlined, Message, CardTravel,Money} from '@material-ui/icons'

export const NavbarData = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "Support",
    path: "/support",
  },
];

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <HomeOutlined/>,
    iconClosed: <ArrowDropUpIcon/> ,
    iconOpen: <ArrowDropDownIcon/>,
    subNav: [
      {
        title: "About",
        path: "/",
        icon: <CardTravel/> ,
      },
      {
        title: "Contact",
        path: "/",
        icon: <Money/> ,
      },
    ],
  },
  {
    title: "Orders",
    path: "/0",
    icon: <NavigateBeforeOutlined/> ,
    iconClosed: <ArrowDropUpIcon/> ,
    iconOpen: <ArrowDropDownIcon/>,
    subNav: [
      {
        title: "About",
        path: "/",
        icon: <CardTravel/>,
      },
      {
        title: "Contact",
        path: "/",
        icon: <Money/>,
      },
    ],
  },
  {
    title: "Products",
    path: "/",
    icon: <Message/> ,
  },
];

// export default { NavbarRoute, SidebarData };
