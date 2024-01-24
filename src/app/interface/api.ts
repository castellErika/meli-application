export interface Response {
    author: {
        name: 'Erika',
        lastname: 'Castellanos'
    },
    results: Result[]
}

export interface Result {
    id: string,
    title: string,
    price: {
        currency: string,
        amount: number,
        decimals: number
    },
    picture: string,
    condition: string,
    free_shipping: boolean
}

export interface DataState {
    loading: boolean;
    data: Result[];
    error: string | null;
}