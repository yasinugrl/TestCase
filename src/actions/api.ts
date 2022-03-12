import axios from 'axios'
import { Alert } from 'react-native'


export const get = (url: string, dispatch: any, start: string, success: string, faild: string) => {
  console.log('GET API URL => ', url);
  dispatch({ type: start })
  axios({
    method: 'get',
    url,
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    if (response.data) {
      console.log('GET SUCCESS RESONSE: => ', url, response);
      dispatch({ type: success, payload: response.data })
    }

  }).catch((err) => {
    const er = err?.response?.data
    console.log('GET ERROR: => ', url, er);
    Alert.alert('ERROR', er?.error?.message ? er?.error?.message : '')
    dispatch({ type: faild })
  })
}

export const post = (url: string, data: object, dispatch: any, start: string, success: string, faild: string) => {
    console.log('POST API URL => ', url);
    dispatch({ type: start })
    axios({
      method: 'post',
      url,
      data,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      if (response.data) {
        console.log('POST SUCCESS RESONSE: => ', url, response);
        dispatch({ type: success, payload: response.data })
      }

    }).catch((err) => {
      const er = err?.response?.data
      console.log('POST ERROR: => ', url, er);
      Alert.alert('ERROR', er?.error?.message ? er?.error?.message : '')
      dispatch({ type: faild })
    })
  }