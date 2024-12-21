// TODO: Create an interface for the Candidate objects returned by the API
export interface Candidate {

    login: string,
    id: number | null,
    avatar_url: string,
    html_url: string,
    repos_url: string

}