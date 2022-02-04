/** Interface to defining our object of response functions */
export interface ResponseFunc {
    GET?: Function
    POST?: Function
    PUT?: Function
    DELETE?: Function
}

export interface Project {
    _id?: string
    url: string;
    name: string;
    description?: string;
    screenshots?: string[];
}

