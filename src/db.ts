
export type Car = {
  name: string;
  model: string;
  year: string;
  doors: string;
  ac: string;
  transmission: string;
  price: string;
  img: string;
  stars: number;
}

const cars : Car[] = [
  {
    name: "Audi A1 S-Line",
    model: "Audi",
    year: "2012",
    doors:"4/5",
    ac: "Yes",
    transmission: "Manual",
    price: "50",
    img: "https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stars: 5
  },
  {
    name: "BMW 3 Series",
    model: "BMW",
    year: "2015",
    doors:"4/5",
    ac: "Yes",
    transmission: "Automatic",
    price: "60",
    img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stars: 4
  },
  {
    name: "Chevrolet Camaro",
    model: "Chevrolet",
    year: "2017",
    doors:"2/5",
    ac: "Yes",
    transmission: "Automatic",
    price: "70",
    img: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stars: 4
  },
  {
    name: "Dodge Challenger",
    model: "Dodge",
    year: "2019",
    doors:"2/5",
    ac: "Yes",
    transmission: "Automatic",
    price: "80",
    img: "https://plus.unsplash.com/premium_photo-1663047616905-5bdff3c06010?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stars: 5
  },
  {
    name: "Ford Mustang",
    model: "Ford",
    year: "2018",
    doors:"2/5",
    ac: "Yes",
    transmission: "Automatic",
    price: "90",
    img: "https://images.unsplash.com/photo-1698205244154-28d627e3dcd4?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stars: 4
  },
  {
    name: "Jaguar F-Type",
    model: "Jaguar",
    year: "2020",
    doors:"2/5",
    ac: "Yes",
    transmission: "Automatic",
    price: "100",
    img: "https://images.pexels.com/photos/93652/pexels-photo-93652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    stars: 3
  }
]


export type Employee = {
  name: string;
  title: string;
  image: string;
}

const employees = [
  {
    name: "Ava Harrison",
    title: "CEO",
    image: "https://plus.unsplash.com/premium_photo-1661297414288-8ed17eb1b3f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Liam Patterson",
    title: "Tech Lead",
    image: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Ethan Cole",
    title: "CFO",
    image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Sophie Brooks",
    title: "Operations Manager",
    image: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Maya Reid",
    title: "Marketing Head",
    image: "https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Owen Clarke",
    title: "Customer Service Lead",
    image: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const pickupLocations = [
  "Airport",
  "City",
  "Hotel",
  "Suburb",
]

const dropofLocations = [
  "Airport",
  "City",
  "Hotel",
  "Suburb",
]

export { cars, pickupLocations, dropofLocations, employees }