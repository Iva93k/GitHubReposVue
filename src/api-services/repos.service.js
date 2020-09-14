import Axios from 'axios'

const RESOURCE_NAME = '/repos'

export default {
  getRepository () {
    return Axios.get(RESOURCE_NAME)
  },

  update (data) {
    // console.log(data)
    return Axios.post(RESOURCE_NAME, data)
  }
}
