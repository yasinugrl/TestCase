export interface products {
    createdAt?: string
    name?: string
    avatar?: string
    description?: string
    rating?: rating
    price?: number
    category?: string
    id?: string
}

export interface rating {
    rate?: number
    count?: number
}


export interface categories {
    createdAt?: string
    name?: string
    id?: string
}