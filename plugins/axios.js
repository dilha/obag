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
  $axios.setBaseURL("https://bag.a-lux.dev/api");

  // const apiWithAxios = new ShoqDonnerService($axios);
  inject("api", $axios);
};
