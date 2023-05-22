import { City } from "./City"

export interface User {
    id: number,
    name: string,
    city: City,
    voted: boolean
}
