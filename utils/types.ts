/** Interface to defining our object of response functions */
export interface ResponseFunc {
    GET?: Function
    POST?: Function
    PUT?: Function
    DELETE?: Function
}

export interface Project {
    id: number
    url: string;
    name: string;
    bookmark: string;
    tech: string;
    description: string;
    screenshots: number[];
}

