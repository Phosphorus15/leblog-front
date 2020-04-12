import Axios from 'axios';

export function load_posts() {
    return Axios.get("/posts")
}
