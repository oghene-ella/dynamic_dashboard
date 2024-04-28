import { HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";

export interface Options {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: 'body';
    context?: HttpContext;
    params?: HttpParams | {
        [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
    transferCache?: {
        includeHeaders?: string[];
    } | boolean;
}

export interface User{
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface UserDetails{
    data: User;
    support: Support[];
}

export interface Support{
    url: string;
    text: string;
}

export interface Users {
    data: User[];
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
}

export interface Pagination {
    [params: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    page: number;
    per_page: number;
}