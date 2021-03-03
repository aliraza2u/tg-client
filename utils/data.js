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
        title: "Order Type",
        path: "/",
        icon: <CardTravel />,
      },
      {
        title: "Order List",
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

//Sales products for home page

export const SaleProductsCard = [
  {
    image:"https://cdn.shopify.com/s/files/1/0287/6594/5940/files/orange-promo-1.jpg?v=1610304414",
    title:"Everything Become Wow",
    price:"640.00",
    salePrice:"125"
  },
  
  {
    image:"https://cdn.shopify.com/s/files/1/0287/6594/5940/files/text-bg2.jpg?v=1577097373",
    title:"Everything Become Wow",
    price:"640.00",
    salePrice:"125"
  },
  {
    image:"https://cdn.shopify.com/s/files/1/0287/6594/5940/files/text-bg3.jpg?v=1577097395",
    title:"Everything Become Wow",
    price:"640.00",
    salePrice:"125"
  },
  {
    image:"https://cdn.shopify.com/s/files/1/0287/6594/5940/files/orange-promo-4.jpg?v=1610304934",
    title:"Everything Become Wow",
    price:"640.00",
    salePrice:"125"
  },

]

export const BrandsData = [
  {
    // loader: 'imgix',
    image:"//cdn.shopify.com/s/files/1/0287/6594/5940/files/brand7_b1410a07-8283-4c86-8714-f4da8bf2f2f8.jpg?v=1584093265"
  },
  
  {
    image:"//cdn.shopify.com/s/files/1/0287/6594/5940/files/brand1_d84a21c6-5640-403e-bd42-f1d843c66212.jpg?v=1584093193"
  },
  {
    image:"//cdn.shopify.com/s/files/1/0287/6594/5940/files/brand7_b1410a07-8283-4c86-8714-f4da8bf2f2f8.jpg?v=1584093265"
  },
  {
    image:"//cdn.shopify.com/s/files/1/0287/6594/5940/files/brand1_d84a21c6-5640-403e-bd42-f1d843c66212.jpg?v=1584093193"
  },
  {
    image:"//cdn.shopify.com/s/files/1/0287/6594/5940/files/brand7_b1410a07-8283-4c86-8714-f4da8bf2f2f8.jpg?v=1584093265"
  },
  {
    image:"//cdn.shopify.com/s/files/1/0287/6594/5940/files/brand7_b1410a07-8283-4c86-8714-f4da8bf2f2f8.jpg?v=1584093265"
  },
  {
    image:"//cdn.shopify.com/s/files/1/0287/6594/5940/files/brand2_c72b775a-fe9d-4b88-abd0-a9dbe42308d3.jpg?v=1584093206"
  },

]