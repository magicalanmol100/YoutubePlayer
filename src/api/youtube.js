import axios from 'axios';

const KEY='AIzaSyCHPOs0XVksOf4VQQvojn6Z58YCrXJbYUs'

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        type:'video',
        key:KEY
    }
})