import Axios from 'axios';
import * as querystring from "querystring";

export function load_posts() {
    return Axios.get("/posts")
}

export function query_posts(q) {
    return Axios.get("/posts?" + q)
}

export function submit_register(request) {
    return Axios.post("/register", querystring.stringify(request))
}

export function submit_login(request) {
    return Axios.post("/login", querystring.stringify(request))
}
