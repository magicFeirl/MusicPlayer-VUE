import axios from 'axios'

const inst = axios.create({
    'timeout': 1000 * 10
})

export default inst;