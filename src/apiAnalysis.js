import axios from 'axios';



export default axios.create({
    baseURL: "https://youtube-analytics-api-heroku.herokuapp.com"
});
