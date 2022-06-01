<script>
export default {
  data() {
    return {
      seo: null,
    }
  },
  async fetch() {
    await this.$axios
      .get(`/seo/${this.$route.name}`)
      .then((r) => {
        this.seo = r.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  head() {
    return {
      title: this.seo?.title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
        { ...this.seo?.meta },
      ],
      // meta: this.seo?.meta,
    }
  },
  created() {
    this.$axios
      .get(`/seo/${this.$route.name}`)
      .then((r) => {
        this.seo = r.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>
