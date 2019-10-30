
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

export default class EmployeeService {
    //static baseURL = 'http://localhost:4000';
    static baseURL = 'https://phucnd-api.herokuapp.com';
  
    static async getAll(url) {
        let res = await axios.get(this.baseURL + url)
            .then(response => {
                return {
                    status:true,
                    data: response.data,
                    messages: 'Thành công',
                    exception:  ''
                }  
            })
            .catch(function (error) {
                return {
                    status: false,
                    data: null,
                    messages: "Đã xảy ra lỗi",
                    exception: error
                }
            });
        return res;
    }
    static get(url, param) {
        let res = axios.get(this.baseURL + url + param)
            .then(response => {
                return {
                    status:true,
                    data: response.data,
                    messages: 'Thành công',
                    exception:  ''
                } 
            })
            .catch(function (error) {
                return {
                    status: false,
                    data: null,
                    messages: "Đã xảy ra lỗi",
                    exception: error
                }
            });
        return res
    }
    static delete(url, param) {
        let res = axios.post(this.baseURL + url + param)
            .then(response => {
                return {
                    status:true,
                    data: response.data,
                    messages: 'Thành công',
                    exception:  ''
                } 
            })
            .catch(function (error) {
                return {
                    status: false,
                    data: null,
                    messages: "Đã xảy ra lỗi",
                    exception: error
                }
            });
        return res
    }
    static create(url, obj) {
        let res = axios.post(this.baseURL + url, obj)
            .then(response => {
                return {
                    status:true,
                    data: response.data,
                    messages: 'Thành công',
                    exception:  ''
                } 
            })
            .catch(function (error) {
                return {
                    status: false,
                    data: null,
                    messages: "Đã xảy ra lỗi",
                    exception: error
                }
            });
        return res
    }
    static update(url, param, obj) {
        let res = axios.post(this.baseURL + url + param, obj)
            .then(response => {
                return {
                    status:true,
                    data: response.data,
                    messages: 'Thành công',
                    exception:  ''
                } 
            })
            .catch(function (error) {
                return {
                    status: false,
                    data: null,
                    messages: "Đã xảy ra lỗi",
                    exception: error
                }
            })
        return res
    }
}
