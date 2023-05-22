import { Candidate } from "./Candidate";

export interface City {
    id: number,
    name: string,
    candidates: Candidate[]
}
