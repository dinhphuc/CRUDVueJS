
class BaseService {
    //static baseURL = "http://localhost:4000";
     static baseURL = "https://phucnd-api.herokuapp.com";
    
    static async getAll(url) {
        let res = await axios.get(this.baseURL + url)
            .then(response => {
                return {
                    status: true,
                    data: response.data,
                    messages: "Thành công",
                    exception: ""
                }
            })
            .catch(function (error) {
                return {
                    status: false,
                    data: null,
                    messages: "lỗi trong quá trình tải dữ liệu",
                    exception: error
                };
            });
        return res;
    }

    static get(url, param) {
        let res = axios.get(this.baseURL + url + param)
            .then(response => {
                return {
                    status: true,
                    data: response.data,
                    messages: "Thành công",
                    exception: ""
                }
            })
            .catch(function (error) {
                return {
                    status: false,
                    data: null,
                    messages: "lỗi",
                    exception: error
                };
            });
        return res;
    }
    static delete(url, param) {
        let res = axios.post(this.baseURL + url + param)
            .then(response => {
                return {
                    status: true,
                    data: response.data,
                    messages: "Xóa thành công",
                    exception: ""
                }
            })
            .catch(function (error) {
                return {
                    status: false,
                    data: null,
                    messages: "lỗi",
                    exception: error
                };
            });
        return res;
    }
    static create(url, obj) {
        let res = axios.post(this.baseURL + url, obj)
            .then(response => {
                return {
                    status: true,
                    data: response.data,
                    messages: "Thành công",
                    exception: ""
                };
            })
            .catch(function (error) {
                return {
                    status: false,
                    data: null,
                    messages: "lỗi",
                    exception: error
                };
            });
        return res;
    }
    static update(url, param, obj) {

        let res = axios.post(this.baseURL + url + param, obj)
            .then(response => {
                return {
                    status: true,
                    data: response.data,
                    messages: "Thành công",
                    exception: ""
                };
            })
            .catch(function (error) {
                return {
                    status: false,
                    data: null,
                    messages: "lỗi",
                    exception: error
                };
            });
        return res;
    }
}