// import ShoqDonnerService from "~/services/ShoqDonnerService";

export default ({ $axios, store }, inject) => {
  if (process.client) {
    const lang = localStorage.getItem('lang') || 'ru'
    $axios.setHeader('Accept-Language', lang)
  }
  if (process.client) {
    const token = localStorage.getItem('token')
    if (token) {
      $axios.setHeader('Authorization', `Bearer ${token}`)
    }
  }

  $axios.interceptors.request.use(
    (config) => {
      if (process.client) {
        const token = localStorage.getItem('token')
        if (token) {
          $axios.setHeader('Authorization', `Bearer ${token}`)
        }
      }

      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  $axios.setBaseURL('https://api.obagofficial.kz/api')
  $axios.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  // const apiWithAxios = new ShoqDonnerService($axios);
  inject('api', $axios)
}
