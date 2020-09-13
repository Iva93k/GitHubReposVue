import Axios from 'axios'

const RESOURCE_NAME = '/repos'

export default {
  getRepository () {
    return Axios.get(RESOURCE_NAME)
  },

  update (id, data) {
    return Axios.put(`${RESOURCE_NAME}/${id}`, data)
  }
}
