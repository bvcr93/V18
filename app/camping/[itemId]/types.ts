export type CampingItem = {
  id: number;
  price: number;
  name: string;
  img: string;
  desc?: string;
};

export const campingTents: CampingItem[] = [
  {
    id: 1,
    name: "The North Face Bivy",
    price: 18,
    img: "https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L300-1?t=1608000868807542",
    desc: "The North Face Assault Ultralight Bivy is a single person minimalist shelter. Designed for high-altitude camps with waterproof design.",
  },
  {
    id: 2,
    name: "Marmot Limelight 2P",
    price: 24,
    img: "https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L180-2?t=1608001138273779",
    desc: "Three season tent designed for easy setup on the first try. Comes with a rainfly and waterproof footprint. Comfortably fits one or two people.",
  },
  {
    id: 3,
    name: "Marmot Limelight 3P",
    price: 30,
    img: "https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L181-1?t=1608001311680275",
    desc: "Three season tent designed for easy setup on the first try. Comes with a rainfly and waterproof footprint. Can fit three people but is also a good tent for two campers.",
  },
  {
    id: 4,
    name: "Marmot Limestone 4P",
    price: 36,
    img: "https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L182-1?t=1608001487829320",
    desc: "Three season family style tent designed for easy setup. Comes with a rainfly and waterproof footprint. Can fit four people but is also a good tent choice for two or three campers. Single Door.",
  },
  {
    id: 5,
    name: "The North Face Kaiju 4P",
    price: 36,
    img: "https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L294-1?t=1608001975304442",
    desc: "Three season tent with 2 doors. Max height is taller than most other four person tents. Three pole design with color coating for easy setup. Full length rainfly.",
  },
  {
    id: 6,
    name: "Marmot Limestone 6P",
    price: 42,
    img: "https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L183-1?t=1608001663111029",
    desc: "Three season family style tent with two large doors, rainfly and footprint. Build for bad weather and staying dry in the rain. Easily fits a full size mattress with room to spare.",
  },
];
export type WinterTents = {
    id: number;
    price: number;
    name: string;
    img: string;
    desc?: string;
  };
  
export const winterTents: WinterTents[] = [
  {
    id: 1,
    name: "The North Face Mtn 25 2P",
    price: 42,
    img: "https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L369-1?t=1608002389015888",
  },
  {
    id: 2,
    name: "The North Face Bastion 4P",
    price: 60,
    img: "https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L295-1?t=1608002795335766",
  },
  {
    id: 3,
    name: "The North Face Mtn 25 2P",
    price: 42,
    img: "https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L369-1?t=1608002389015888",
  },
];

