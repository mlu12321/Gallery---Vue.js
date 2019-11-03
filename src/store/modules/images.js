import api from '../../api/imgur';
import { router } from '../../main';

const state = {
  images: []
};

const getters = {
  allImages: state => state.images
};

const actions = {
  // rootState is another property of first argument
  // have access state of all modules

  // async fetchImages({ rootState }) {
  //   const { token } = rootState.auth
  //   const response = await api.fetchImages(token)
  //   console.log(response)
  // }
  async fetchImages({ rootState, commit }) {
    const { token } = rootState.auth;
    const response = await api.fetchImages(token);
    commit('setImages', response.data.data);
  },

  async uploadImages({ rootState }, images) {
    const { token } = rootState.auth;

    await api.upload(images, token);
    router.push('/');
    //call api and redirect to imageList component
  }

  // upload image
  // set image
};

const mutations = {
  setImages: (state, images) => {
    state.images = images
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
