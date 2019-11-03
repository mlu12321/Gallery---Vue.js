import qs from 'qs';
import axios from 'axios';

const CLIENT_ID = 'dbc810ee458a16d'
const ROOT_URL = 'https://api.imgur.com'

export default {
  login() {
    const queryString = {
      client_id: CLIENT_ID,
      response_type: 'token'
    }
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
      queryString
    )}`
  },

  fetchImages(token) {
    return axios.get(`${ROOT_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  },

  upload(images, token) {
    //the image from event is a reference to the image itself
    const promises = Array.from(images).map(image => {
      const formData = new FormData();
      //formData can retrive data by the reference
      formData.append('image', image);

      return axios.post(`${ROOT_URL}/3/image`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    })
    return Promise.all(promises);
  }


}

// https://api.imgur.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&response_type=REQUESTED_RESPONSE_TYPE&state=APPLICATION_STATE
// dbc810ee458a16d
// 18d94c98a9fd8659f0fe483b4deff8da7a5e5c97
