import Axios from 'axios';

function load_posts() {
    Axios.get("/posts").then(res => {
      console.log(res)
    })
}