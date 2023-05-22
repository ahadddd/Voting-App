import { City } from "./City";

export interface Candidate {
    id: number,
    name: string,
    votes: number,
    city: City
}
