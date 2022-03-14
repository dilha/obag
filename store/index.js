// import axios from "axios"

// export const state = () => {
//   return {
//     news: [],
//   }
// }

// export const mutations = {
//   SER_NEWS_TO_STATE: (state, news) => {
//     state.news = news
//   }
// }

// export const actions = {
//   GET_NEWS_FROM_API({commit}) {
//     return axios
//     .get('https://bag.a-lux.dev/api/page/get-news')
//     .then((news) => {
//       commit('SER_NEWS_TO_STATE', news);
//       return news;
//     })
//     .catch((error) => {
//       console.log(error);
//       return error;
//     })
//   }
// }

// export const getters = {
//   NEWS(state) {
//     return state.news
//   }
// }