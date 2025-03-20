interface Address {
    street: string;
    city: string;
    state: string;
    zip: string;
}

interface Property {
    id: string;
    title: string;
    description: string;
    price: number;
    propertyType: string;
    bedrooms: number;
    baths: number;
    halfBaths: number;
    livingAreaSqft: number;
    lotSizeSqft: number;
    address: Address;
    images: string[];
    listingUrl: string;
    videoUrl: string;
}

export type { Property }
