import {commonParams} from './config'
import axios from 'axios'

export function getLyric(mid) {
  const url = '/api/lyric'

  const data = Object.assign({}, commonParams, {
    songmid: mid,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    categoryId: 10000000,
    pcachetime: +new Date(),
    g_tk: 48063238,
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    if (typeof res.data === 'string') {
      const reg = /^\w+\(({[^()]+})\)$/
      var matches = res.data.match(reg)
      if (matches) {
        let val = JSON.parse(matches[1])
        return Promise.resolve(val)
      }
    }
  })
}