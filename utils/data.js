import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {HomeOutlined, NavigateBeforeOutlined, Message, CardTravel,Money} from '@material-ui/icons'

export const NavbarRoute = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/",
  },
  {
    name: "Contact",
    href: "/",
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
