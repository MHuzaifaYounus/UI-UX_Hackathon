export interface Food {
    slug:string;
    name: string;
    category: string; 
    price: number;
    originalPrice?: number;
    tags: string[];
    image?: string;
    description: string;
    available: boolean;
}
export interface Chef {
    name: string;
    position: string;
    experience: number;
    specialty: string;
    image?: string;
    description: string;
    available: boolean;
}

