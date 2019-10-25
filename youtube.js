import axios from 'axios';

const KEY = 'AIzaSyA0qVFXFB5NNBYFR6kMRzOuX-YXJj8eX1Y';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});