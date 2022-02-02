/** Interface to defining our object of response functions */
export interface ResponseFunc {
    GET?: Function
    POST?: Function
    PUT?: Function
    DELETE?: Function
}

export interface Project {
    url: string;
    description?: string;
    screenshots?: string[];
}
