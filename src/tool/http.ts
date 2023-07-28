import Router from '@/router'
import { timeout } from '@/tool/config'
import axios, { AxiosError, AxiosResponse } from 'axios'
import qs from 'qs'

let base_url: string

if (import.meta.env.DEV) {
    base_url = 'http://localhost:8000'
    // base_url = "https://movie.demo.nvimer.org";
} else {
    base_url = window.location.protocol + '//' + window.location.host
}

const base_http = axios.create({
    baseURL: base_url,
    timeout: timeout,
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    withCredentials: true,
})

axios.defaults.withCredentials = true

// 基本的拦截器
const base_interceptors = base_http.interceptors

// 请求拦截
base_interceptors.request.use()

// 响应拦截
base_interceptors.response.use(
    (res: AxiosResponse) => {
        return res
    },
    (err: AxiosError) => {
        // 这里用来处理http常见错误，进行全局提示
        let message = ''
        switch (err.response?.status) {
            case 400:
                message = '请求错误(400)'
                break
            case 401:
                message = '未授权，请重新登录(401)'
                Router.push({
                    name: 'login',
                })
                break
            case 403:
                message = '拒绝访问(403)，请登陆'
                break
            case 404:
                message = '请求出错(404)'
                break
            case 408:
                message = '请求超时(408)'
                break
            case 500:
                message = '服务器错误(500)'
                break
            case 501:
                message = '服务未实现(501)'
                break
            case 502:
                message = '网络错误(502)'
                break
            case 503:
                message = '服务不可用(503)'
                break
            case 504:
                message = '网络超时(504)'
                break
            case 505:
                message = 'HTTP版本不受支持(505)'
                break
            default:
                let msg = err.response?.status
                    ? `(${err.response?.status})`
                    : ``
                message = `连接出错${msg} !`
        }
        // 通过naive ui的message函数提示用户
        if (err.response?.status) {
            window.$message.error(message)
        }
        return Promise.reject(err.response)
    },
)

// 基本的get请求
const get = async function (url: string, callback: Function) {
    const response = await base_http.get(url)
    callback(response.status, response.data)
}

// 基本的post请求
const post = async function (url: string, data: Object, callback: Function) {
    const response = await base_http.post(url, qs.stringify(data))
    callback(response.status, response.data)
}

export { post, get, base_url }
