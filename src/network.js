import Axios from 'axios';
import * as querystring from "querystring";

export function load_posts() {
    return Axios.get("/posts")
}

export function submit_register(request) {
    return Axios.post("/register", querystring.stringify(request))
}
