<script>
export default {
  data() {
    return {
      seo: null,
    }
  },
  async fetch() {
    await this.$axios.get(`/seo/${this.$route.name}`).then((r) => {
      console.log(r.data)
      this.seo = r.data
    })
  },
  head() {
    return {
      title: this.seo?.title,
      meta: this.seo?.meta,
    }
  },
  created() {
    this.$axios.get(`/seo/${this.$route.name}`).then((r) => {
      console.log(r.data)
      this.seo = r.data
    })
  },
}
</script>
