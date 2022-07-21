export default function ({ $axios }) {
  $axios.onRequest((config) => {
    if (config.url.includes(process.env.API_URL)) {
      if (process.env.AUTH_TOKEN) {
        config.headers.common.Authorization = `Bearer ${process.env.AUTH_TOKEN}`
      }
    }
  })
}
