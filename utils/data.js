import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import {
  HomeOutlined,
  NavigateBeforeOutlined,
  Message,
  CardTravel,
  Money,
} from "@material-ui/icons";

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
    icon: <HomeOutlined />,
    iconClosed: <ArrowDropUpIcon />,
    iconOpen: <ArrowDropDownIcon />,
    subNav: [
      {
        title: "About",
        path: "/",
        icon: <CardTravel />,
      },
      {
        title: "Contact",
        path: "/",
        icon: <Money />,
      },
    ],
  },
  {
    title: "Orders",
    path: "/0",
    icon: <NavigateBeforeOutlined />,
    iconClosed: <ArrowDropUpIcon />,
    iconOpen: <ArrowDropDownIcon />,
    subNav: [
      {
        title: "About",
        path: "/",
        icon: <CardTravel />,
      },
      {
        title: "Contact",
        path: "/",
        icon: <Money />,
      },
    ],
  },
  {
    title: "Products",
    path: "/",
    icon: <Message />,
  },
];

//Data for ProductCard in Home Page.

export const ProductCardData = [
  {
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/42-alu-silver-sport-white-nc-s3-grid?wid=540&hei=550&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1594259786000",
    title: "Apple Watch",
    description: "Premium Quality - Classic Design",
    price: "1500",
  },
  {
    image:
      "https://image.made-in-china.com/202f0j00fPGYwQERTibo/2019-Top-Quality-Men-Polo-T-Shirt-Design-Wholesale-Custom-Mens-100-Cotton-Golf-Polo-Shirts-with-Embroidery-Logo.jpg",
    title: "T-shirt",
    description: "Best stuff available here.",
    price: "1100",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0151/1081/products/MENS-T-SHIRT-MOCKUP-TEMPLATES-01_2000x.jpg?v=1550808034",
    title: "T-shirt",
    description: "Best stuff available here.",
    price: "1100",
  },
  {
    image:
      "https://www.rushordertees.com/design/ZoomImage.php?src=5254344_f&style=4980&colorCode=00&x=240&y=300&width=880&height=880&scale=1.7&watermark=false",
    title: "T-shirt",
    description: "Best stuff available here.",
    price: "1100",
  },
  {
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/42-alu-silver-sport-white-nc-s3-grid?wid=540&hei=550&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1594259786000",
    title: "Apple Watch",
    description: "Premium Quality - Classic Design",
    price: "1500",
  },
];

//Sale by catergory data for home page
export const CategoryCardData = [
  {
    image:
      "//cdn.shopify.com/s/files/1/0287/6594/5940/collections/collection6_450x.jpg?v=1586136780",
    title: "Accessories",
    description: "Save over $500.00",
  },
  {
    image:
      "//cdn.shopify.com/s/files/1/0287/6594/5940/collections/collection5_450x.jpg?v=1586137602",
    title: "Sound Players",
    description: "Save $100.00",
  },
  {
    image:
      "//cdn.shopify.com/s/files/1/0287/6594/5940/collections/collection2_450x.jpg?v=1586137620",
    title: "WEARABLES",
    description: "Save over $50.00",
  },
  {
    image:
      "//cdn.shopify.com/s/files/1/0287/6594/5940/collections/collection5_450x.jpg?v=1586137602",
    title: "Sound Players",
    description: "Save $100.00",
  },
  {
    image:
      "//cdn.shopify.com/s/files/1/0287/6594/5940/collections/collection6_450x.jpg?v=1586136780",
    title: "Accessories",
    description: "Save over $500.00",
  },
  {
    image:
      "//cdn.shopify.com/s/files/1/0287/6594/5940/collections/collection5_450x.jpg?v=1586137602",
    title: "Sound Players",
    description: "Save $100.00",
  },
  {
    image:
      "//cdn.shopify.com/s/files/1/0287/6594/5940/collections/collection2_450x.jpg?v=1586137620",
    title: "WEARABLES",
    description: "Save over $50.00",
  },
  {
    image:
      "//cdn.shopify.com/s/files/1/0287/6594/5940/collections/collection5_450x.jpg?v=1586137602",
    title: "Sound Players",
    description: "Save $100.00",
  },
];
