import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://vue-axios-cf540.firebaseio.com',
    timeout: 2000,
    headers: {'X-Custom-Header': 'foobar'}
})

instance.defaults.headers.common['SOMETHING'] = 'nothing';

export default instance;