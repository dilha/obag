// import ShoqDonnerService from "~/services/ShoqDonnerService";

export default ({ $axios, store }, inject) => {
  let lang = null;

  if (process.client) {
    lang = JSON.parse(localStorage.getItem("lang")) || {
      code: "ru",
      file: "ru",
      name: "Русский",
    };
    $axios.setHeader("Accept-Language", lang.code);
  }
  if (process.client) {
    const token = localStorage.getItem("token");
    if(token){
      $axios.setHeader("Authorization", `Bearer ${token}`);
    }
  }

   $axios.interceptors.request.use(
    (config) => {
      if (process.client) {
      const token = localStorage.getItem("token");
      if(token){
        $axios.setHeader("Authorization", `Bearer ${token}`);
      }
  }


      return config;
    },
    (error) => {

      return Promise.reject(error);
    }
  );

  $axios.setBaseURL("https://bag.a-lux.dev/api");
  $axios.interceptors.response.use(
    (response) => {

      return response;
    },
    (error) => {

      return Promise.reject(error);
    }
  );
  // const apiWithAxios = new ShoqDonnerService($axios);
  inject("api", $axios);
};
