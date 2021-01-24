import axios from 'axios';

const KEY = 'AIzaSyBF06YiYm_OUMvJ03dQFLncBoK6bpjHKII'; // mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})