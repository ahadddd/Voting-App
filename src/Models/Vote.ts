import { Candidate } from "./Candidate";
import { User } from "./User";

export interface Vote {
    id: number,
    voter: User,
    voted: Candidate,
    casted: boolean
}
