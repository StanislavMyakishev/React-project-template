import * as types from '../common/actionTypes/app'
import { axios } from './axiosConfig'

export const setAppLoading = (isLoading) => (dispatch) => {
  dispatch({
    type: types.SET_LOADING,
    data: isLoading,
  })
}

//  EXAMPLE OF AXIOS REQUEST
// export const getWordTranslate = (word, targetLang, sourceLang) => (
//   dispatch,
//   getState
// ) => {
//   //  example of work with .env
//   const { YANDEX_TRANSLATE_API_KEY } = process.env
//   //  we can get redux state from here
//   const loadingState = getState().app.isLoading
//   //  setting loader before async request
//   setAppLoading(!loadingState)
//   const params = {
//     word,
//     targetLang,
//     sourceLang,
//   }
//   return axios({
//     url: `/yandex-translate/word`,
//     method: 'GET',
//     data: params,
//     //  example of work with api keys idk if it is valid for yandex.translate
//     params: {
//       apikey: YANDEX_TRANSLATE_API_KEY,
//     },
//   })
//     .then((response) => {
//       //  loader now is unnecessary
//       setAppLoading(false)
//       return Promise.resolve(response)
//     })
//     .catch((e) => {
//       //  loader now is unnecessary
//       setAppLoading(false)
//       return Promise.reject(e)
//     })
// }
