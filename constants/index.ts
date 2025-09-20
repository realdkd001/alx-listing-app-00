import { PropertyProps, SearchField, NAVITEMSFIELD, FooterNavLinks, NavLinks as NavField } from "../interfaces";

export const HEROIMAGESRC = "/assets/heroImage.png";
export const CaseMinimalistic = "/assets/icons/Case Minimalistic.svg"
export const Logo = "/assets/icons/logo.svg"
export const LogoWhite = "/assets/icons/logo-white.svg"
export const Profile = "/assets/icons/profile.svg"
export const MagniferIcon = "/assets/icons/Magnifer.svg"
export const HeaderNotificationText = "Overseas trips? Get the latest information on travel guide";

export const FILTERS: string[] = ["All", "Top Villa", "Self Check-in"];

export const ButtomNavLinks: NavField[] = [
  {
    text: "Terms of Service",
    link: "/"
  },
  {
    text: "Policy Service",
    link: "/"
  },
  {
    text: "Cookies Policy",
    link: "/"
  }
]

export const NavLinks: FooterNavLinks[] = [
  {
    title: "Explore",
    links: [
      {
        text: "Apartment in Dubai",
        link: "/"
      },
      {
        text: "Hotels in New York",
        link: "/"
      },
      {
        text: "Villa in Spain",
        link: "/"
      },
      {
        text: "Mansion in Indonesia",
        link: "/"
      },
    ]
  },
  {
    title: "Company",
    links: [
      {
        text: "About Us",
        link: "/"
      },
      {
        text: "Blog",
        link: "/"
      },
      {
        text: "Career",
        link: "/"
      },
      {
        text: "Customers",
        link: "/"
      },
      {
        text: "Brand",
        link: "/"
      },
    ]
  },
  {
    title: "Help",
    links: [
      {
        text: "Support",
        link: "/"
      },
      {
        text: "Cancel booking",
        link: "/"
      },
    ]
  },

]

export const NAVITEMS: NAVITEMSFIELD[] = [
  {
    title: "Rooms",
    imgsrc: "/assets/icons/living-room.svg",
  },
  {
    title: "Mansion",
    imgsrc: "/assets/icons/mansion.svg",
  },
  {
    title: "Countryside",
    imgsrc: "/assets/icons/countryside.svg",
  },
  {
    title: "Villa",
    imgsrc: "/assets/icons/villa.svg",
  },
  {
    title: "Tropical",
    imgsrc: "/assets/icons/tropical.svg",
  },
  {
    title: "New",
    imgsrc: "/assets/icons/new.svg",
  },
  {
    title: "Amazing pool",
    imgsrc: "/assets/icons/amazing-pool.svg",
  },
  {
    title: "Beach house",
    imgsrc: "/assets/icons/beach-house.svg",
  },
  {
    title: "Island",
    imgsrc: "/assets/icons/island.svg",
  },
  {
    title: "Camping",
    imgsrc: "/assets/icons/camping.svg",
  },
  {
    title: "House",
    imgsrc: "/assets/icons/house.svg",
  },
  {
    title: "Lakefront",
    imgsrc: "/assets/icons/lakefront.svg",
  },
  {
    title: "Treehouse",
    imgsrc: "/assets/icons/treehouse.svg",
  },
  {
    title: "Cabins",
    imgsrc: "/assets/icons/cabin.svg",
  },
  {
    title: "Castles",
    imgsrc: "/assets/icons/castles.svg",
  },
]
export const SEARCHFIELD: SearchField[] = [
  {
    tag: "location",
    type: "text",
    label: "Location",
    placeholder: "Search for destination"
  },
  {
    tag: "check_in",
    type: "date",
    label: "Check in",
    placeholder: "Add date"
  },
  {
    tag: "check_out",
    type: "date",
    label: "Check out",
    placeholder: "Add date"
  },
  {
    tag: "people",
    type: "text",
    label: "People",
    placeholder: "Add guest"
  }
]
export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "/assets/image 2.png",
    discount: ""
  },
  {
    name: "Mountain Escape Chalet",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA"
    },
    rating: 4.70,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: "/assets/image 3.png",
    discount: "30"
  },
  {
    name: "Cozy Desert Retreat",
    address: {
      state: "Palm Springs",
      city: "California",
      country: "USA"
    },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: "/assets/image 4.png",
    discount: ""
  },
  {
    name: "City Lights Penthouse",
    address: {
      state: "New York",
      city: "New York",
      country: "USA"
    },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    image: "/assets/image 5.png",
    discount: "15"
  },
  {
    name: "Riverside Cabin",
    address: {
      state: "Queenstown",
      city: "Otago",
      country: "New Zealand"
    },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "4-6"
    },
    image: "/assets/image 1.png",
    discount: "20"
  },
  {
    name: "Modern Beachfront Villa",
    address: {
      state: "Sidemen",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 5000,
    offers: {
      bed: "5",
      shower: "4",
      occupants: "8-10"
    },
    image: "/assets/image 6.png",
    discount: ""
  },
  {
    name: "Lakeside Chalet",
    address: {
      state: "Banff",
      city: "Alberta",
      country: "Canada"
    },
    rating: 4.65,
    category: ["Lakeside", "Mountain View", "Hiking Trails"],
    price: 2300,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "/assets/image 7.png",
    discount: "10"
  },
  {
    name: "Tropical Garden Villa",
    address: {
      state: "Koh Samui",
      city: "Surat Thani",
      country: "Thailand"
    },
    rating: 4.80,
    category: ["Garden", "Free Parking", "Self Checkin"],
    price: 2750,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "5-6"
    },
    image: "/assets/image 8.png",
    discount: "25"
  },
  {
    name: "Urban Loft",
    address: {
      state: "Berlin",
      city: "Berlin",
      country: "Germany"
    },
    rating: 4.60,
    category: ["City Center", "Free WiFi", "24h Checkin"],
    price: 2000,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: "/assets/image 9.png",
    discount: ""
  },
  {
    name: "Secluded Forest Cabin",
    address: {
      state: "Whistler",
      city: "British Columbia",
      country: "Canada"
    },
    rating: 4.72,
    category: ["Secluded", "Hot Tub", "Self Checkin"],
    price: 2600,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: "/assets/image 10.png",
    discount: "40"
  },
  {
    name: "Cliffside Villa",
    address: {
      state: "Amalfi",
      city: "Salerno",
      country: "Italy"
    },
    rating: 4.93,
    category: ["Cliffside", "Infinity Pool", "Sea View"],
    price: 6000,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8"
    },
    image: "/assets/image 1.png",
    discount: "50"
  },
  {
    name: "Coastal Escape Villa",
    address: {
      state: "Noosa",
      city: "Queensland",
      country: "Australia"
    },
    rating: 4.83,
    category: ["Beachfront", "Pet Friendly", "Free Parking"],
    price: 3400,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "/assets/image 12.png",
    discount: ""
  },
  {
    name: "Historical Villa",
    address: {
      state: "Florence",
      city: "Tuscany",
      country: "Italy"
    },
    rating: 4.67,
    category: ["Historical", "Free Breakfast", "Self Checkin"],
    price: 2700,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    image: "/assets/image 13.png",
    discount: "35"
  },
  {
    name: "Downtown Apartment",
    address: {
      state: "Tokyo",
      city: "Tokyo",
      country: "Japan"
    },
    rating: 4.81,
    category: ["City Center", "Free WiFi", "Public Transport"],
    price: 2200,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "2"
    },
    image: "/assets/image 14.png",
    discount: ""
  },
  {
    name: "Luxury Safari Lodge",
    address: {
      state: "Serengeti",
      city: "Mara",
      country: "Tanzania"
    },
    rating: 4.97,
    category: ["Safari", "Guided Tours", "Free Breakfast"],
    price: 4500,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8"
    },
    image: "/assets/image 16.png",
    discount: "20"
  },
  {
    name: "Countryside Cottage",
    address: {
      state: "Cotswolds",
      city: "Gloucestershire",
      country: "UK"
    },
    rating: 4.58,
    category: ["Countryside", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-4"
    },
    image: "/assets/image 16.png",
    discount: "25"
  },
  {
    name: "Riverfront Mansion",
    address: {
      state: "Paris",
      city: "Île-de-France",
      country: "France"
    },
    rating: 4.86,
    category: ["Riverfront", "Private Garden", "Self Checkin"],
    price: 5000,
    offers: {
      bed: "4",
      shower: "3",
      occupants: "6-8"
    },
    image: "/assets/image 1.png",
    discount: "30"
  },
  {
    name: "Ski Chalet",
    address: {
      state: "Zermatt",
      city: "Valais",
      country: "Switzerland"
    },
    rating: 4.75,
    category: ["Mountain View", "Ski Access", "Fireplace"],
    price: 3900,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "/assets/image 2.png",
    discount: ""
  },
  {
    name: "Island Paradise Villa",
    address: {
      state: "Mahe",
      city: "Victoria",
      country: "Seychelles"
    },
    rating: 4.98,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 6500,
    offers: {
      bed: "5",
      shower: "5",
      occupants: "8-10"
    },
    image: "/assets/image 3.png",
    discount: "60"
  },
  {
    name: "Clifftop Retreat",
    address: {
      state: "Cape Town",
      city: "Western Cape",
      country: "South Africa"
    },
    rating: 4.78,
    category: ["Ocean View", "Private Pool", "Self Checkin"],
    price: 4100,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "/assets/image 4.png",
    discount: ""
  }
];