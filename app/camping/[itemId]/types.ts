export type CampingItem  = {
    id: number
    price: number
    name: string
    img: string
    desc?: string
    }
    
    export const campingTents: CampingItem[] = [
        {
            id: 1,
            name: "The North Face Bivy",
            price: 18,
            img: "https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L300-1?t=1608000868807542",
        desc: "The North Face Assault Ultralight Bivy is a single person minimalist shelter. Designed for high-altitude camps with waterproof design."
        },
        {
            id: 2,
            name: "Marmot Limelight 2P",
            price: 24,
            img: "https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L180-2?t=1608001138273779"
        },
        {
            id: 3,
            name: "Marmot Limelight 3P",
            price: 30,
            img: "https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L181-1?t=1608001311680275"
        },
        {
            id: 4,
            name: "Marmot Limestone 4P",
            price: 36,
            img: "https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L182-1?t=1608001487829320"
        },
        {
            id: 5,
            name: "The North Face Kaiju 4P",
            price: 36,
            img: "https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L294-1?t=1608001975304442"
        },
        {
            id: 6,
            name: "Marmot Limestone 6P",
            price: 42,
            img: "https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L183-1?t=1608001663111029"
        },
    ]