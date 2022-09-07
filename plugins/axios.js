
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
          title: error.response.status,
          description: error.response.data ? error.response.data.message : error.message,
          type: 'error',
          block: store.state.getMessageBlock
        })
    } else if (error.request) {
      // Запрос был сделан, но ответ не получен
      // `error.request`- это экземпляр XMLHttpRequest в браузере и экземпляр
      // http.ClientRequest в node.js
      store.dispatch(
        'setMessage',
        {
          title: 'Ошибка',
          description: error.request,
          type: 'error',
          block: store.state.getMessageBlock
        })
    } else {
      // Произошло что-то при настройке запроса, вызвавшее ошибку
      store.dispatch(
        'setMessage',
        {
          title: 'Ошибка',
          description: error.message,
          type: 'error',
          block: store.state.getMessageBlock
        })
    }
  })
}
