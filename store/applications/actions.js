
export default {
  setMessage ({ commit }, message) {
    commit('setMessage', message)
  },
  sendData ({ commit, rootState, dispatch }, payload) {
    commit('changeStep', 2)

    /* await this.$axios.post(`${process.env.BPIUM_URL}/records`, {
      ...payload.values
    },
    {
      method: 'HEAD',
      mode: 'no-cors'
    }) */

    /*  try {
      async function postData (url = '', data = {}) {
        const response = await fetch(url, {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
          body: JSON.stringify(data)
        })
        return await response.json()
      }

      await postData('https://rentallease.bpium.ru/auth/login', {
        email: 'api-rental-bpium@ipotech.su',
        password: 'HappyAPI2022'
      })
        .then((data) => {
          console.log(data)
        })
    } catch (error) {

    } */

  /*   try {
      const testURL = 'https://rentallease.bpium.ru/auth/login'
      const myInit = {
        method: 'POST',
        mode: 'cors',
        body: {
          email: 'api-rental-bpium@ipotech.su',
          password: 'HappyAPI2022'
        },
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
      }

      const res = await fetch(testURL, myInit).then((response) => {
        response.json()
      })
      console.log(res)
    } catch (err) {
      dispatch('setMessage', { title: 'Ошибка:', description: `${err}`, type: 'error' })
    } */
  }
  /*  const testURL = `${process.env.BPIUM_URL}/records`
    const myInit = {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify({ ...payload.values }),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    }
    try {
      const res = await fetch(testURL, myInit).then((response) => {
        response.json()
      })
      console.log(res)
      if (res) {
        commit('changeStep', 2)
      }
    } catch (err) {
      dispatch('setMessage', { title: 'Ошибка:', description: `${err}`, type: 'error' })
    }
  } */
}
