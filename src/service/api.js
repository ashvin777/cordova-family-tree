class API {
  constructor() {
    this.baseUrl = `http://${window.location.hostname}:3000`;
  }

  getUrl(api) {
    return `${this.baseUrl}/${api}`;
  }

  //GET
  get(api, options) {
    let url = this.getUrl(api);

    if (options && options.constructor === Object) {
      url += '?';
      Object.keys(options).forEach(key => {
        url += `${key}=${options[key]}`;
      });
    }

    return fetch(url);
  }

  //Create
  post(api, data) {
    return fetch(this.getUrl(api), {
      body: JSON.stringify(data),
      method: 'POST'
    });
  }

  put() {

  }

  delete() {

  }
}

let APIInstance = new API();
export default APIInstance;
