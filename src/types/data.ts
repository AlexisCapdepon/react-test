export interface UserResponse {
    results: UserData[];
}
export interface UserData {
    name: {
        first: string;
        last: string;
    }
    email: string;
    dob: {
        age: number;
    }
}