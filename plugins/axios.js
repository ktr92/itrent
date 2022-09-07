
export default function ({ $axios, store }) {
  $axios.onRequest((config) => {
    if (config.url.includes(process.env.API_URL)) {
      if (process.env.AUTH_TOKEN) {
        config.headers.common.Authorization = `Bearer ${process.env.AUTH_TOKEN}`
      }
    }
  })

  $axios.onError((error) => {
    if (error.response) {
      // Запрос был сделан, и сервер ответил кодом состояния, который
      // выходит за пределы 2xx
      store.dispatch(
        'setMessage',
        {
          title: `Ошибка ${error.response.status}`,
          description: error.response.data ? error.response.data.message : error.message || 'Что-то пошло не так...',
          type: 'error'
        })
    } else if (error.request) {
      // Запрос был сделан, но ответ не получен
      // `error.request`- это экземпляр XMLHttpRequest в браузере и экземпляр
      // http.ClientRequest в node.js
      store.dispatch(
        'setMessage',
        {
          title: `Ошибка ${error.response.status}`,
          description: error.request || 'Что-то пошло не так...',
          type: 'error'
        })
    } else {
      // Произошло что-то при настройке запроса, вызвавшее ошибку
      store.dispatch(
        'setMessage',
        {
          title: `Ошибка ${error.response.status}`,
          description: error.message || 'Что-то пошло не так...',
          type: 'error'
        })
    }
  })
}
