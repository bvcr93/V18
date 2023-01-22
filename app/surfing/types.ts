

type Category = "surfboards" | "womensuits" | "mensuits " | "accesories";

type Item = {
  id: number;
  price: number;
  name: string;
  img: string;
  desc?: string;
  specs?: string;
  category: Category;
};

export interface SurfingRes {
  status: string;
  items: Item[];
}

export const mockSurfingRes: SurfingRes = {
  status: "ok",
  items: [
    {
      id: 1,
      price: 20,
      name: "6'2 Fiberglass Surfboard",
      img: "https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L179-2?t=1529801401485290",
      desc: "The Rusty Smoothie is fast and smooth. It has a timeless outline designed to accommodate a wide range of conditions. The bottom starts with a slight roll in the nose transitioning to a light single through the center. This shallow single blends into a sunken double concave in front of the fins and an elevated double concave between the fins that finally ends in a double barrel vee of the tail.",
      category: "surfboards",
    },
    {
      id: 2,
      price: 20,
      name: "6'6 Surfboard",
      img: "https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L151-1?t=1529806289356093",
      desc: "TThe Redline is the Rusty team riders' preferred model. The board features a full round tail that lends itself to fluid power surfing and seamless continuity through turns. There is a moderate single concave, which is deepest in between the feet, and the rail has a full radius at the apex, making it a neutral and forgiving surfboard.",
      category: "surfboards",
    },
    {
      id: 3,
      price: 20,
      name: "7'2 Fiberglass Surfboard",
      img: "https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L164-1?t=1529810142246176",
      desc: "The Rusty Smoothie is fast and smooth. It has a timeless outline designed to accommodate a wide range of conditions. The bottom starts with a slight roll in the nose transitioning to a light single through the center. This shallow single blends into a sunken double concave in front of the fins and an elevated double concave between the fins that finally ends in a double barrel vee of the tail.",
      category: "surfboards",
    },
    {
      id: 4,
      price: 20,
      name: "8'0 Beginner Surfboard",
      img: "https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L153-3?t=1529816970233596",
      desc: "The Rusty Smoothie is fast and smooth. It has a timeless outline designed to accommodate a wide range of conditions. The bottom starts with a slight roll in the nose transitioning to a light single through the center. This shallow single blends into a sunken double concave in front of the fins and an elevated double concave between the fins that finally ends in a double barrel vee of the tail.",
      category: "surfboards",
    },

    {
      id: 5,
      price: 20,
      name: "6'2 Fiberglass Surfboard",
      img: "https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L284-1?t=1616650035273964",
      desc: "Introducing the worlds the warmest 4/3mm wetsuit—and it's the world’s most environmentally friendly wetsuit. The Patagonia Yulex wetsuit series is one of a kind, made with 85% Yulex® natural rubber/15% synthetic rubber, and Fair Trade Certified.",
      specs: "Recommended for water temps between 52F-60F (May - Nov)",
      category: "surfboards",
    },
    {
      id: 6,
      price: 20,
      name: "6'2 Fiberglass Surfboard",
      img: "https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L151-1?t=1529806289356093",
      desc: "The Rusty Smoothie is fast and smooth. It has a timeless outline designed to accommodate a wide range of conditions. The bottom starts with a slight roll in the nose transitioning to a light single through the center. This shallow single blends into a sunken double concave in front of the fins and an elevated double concave between the fins that finally ends in a double barrel vee of the tail.",
      category: "surfboards",
    },

    {
      id: 10,
      price: 20,
      name: "Patagonia Women's Summer Wetsuit - 4/3mm - Size 2",
      img: "https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L393-1?t=1607804187101107",
      desc: "Introducing the worlds the warmest 4/3mm wetsuit—and it's the world’s most environmentally friendly wetsuit. The Patagonia Yulex wetsuit series is one of a kind, made with 85% Yulex® natural rubber/15% synthetic rubber, and Fair Trade Certified.",
      category: "womensuits",
    },
    {
      id: 11,
      price: 20,
      name: "Patagonia Men's Winter Wetsuit - 5/4mm - Size Small",
      img: "https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L403-1?t=1607804857246450",
      desc: "Introducing the worlds the warmest 5/4mm wetsuit—and it's the world’s most environmentally friendly wetsuit. The Patagonia Yulex wetsuit series is one of a kind, made with 85% Yulex® natural rubber/15% synthetic rubber, and Fair Trade Certified.",
      category: "mensuits ",
    },
  ],
};
