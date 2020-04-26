import axios from 'axios';

export default class RequestServices {
  static fetch (url){
    return request ('get', url);
  }
  static save(url,data){
    return request ('post', url, data)
  }
  static get(url){
    return request ('get', url)
  }
  static delete(url, data){
    return request('delete', url, data)
  }
  static update(url, data){
    return request('put', url, data)
  }
}

function request (method, url, data){
  return axios({
    method,
    url,
    data,
  });
}
