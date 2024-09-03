
export type Car = {
  name: string;
  model: string;
  year: string;
  doors: string;
  ac: string;
  transmission: string;
  price: string;
  img: string;
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
    img: "https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "BMW 3 Series",
    model: "BMW",
    year: "2015",
    doors:"4/5",
    ac: "Yes",
    transmission: "Automatic",
    price: "60",
    img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Chevrolet Camaro",
    model: "Chevrolet",
    year: "2017",
    doors:"2/5",
    ac: "Yes",
    transmission: "Automatic",
    price: "70",
    img: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Dodge Challenger",
    model: "Dodge",
    year: "2019",
    doors:"2/5",
    ac: "Yes",
    transmission: "Automatic",
    price: "80",
    img: "https://plus.unsplash.com/premium_photo-1663047616905-5bdff3c06010?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Ford Mustang",
    model: "Ford",
    year: "2018",
    doors:"2/5",
    ac: "Yes",
    transmission: "Automatic",
    price: "90",
    img: "https://images.unsplash.com/photo-1698205244154-28d627e3dcd4?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
]

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

export { cars, pickupLocations, dropofLocations }