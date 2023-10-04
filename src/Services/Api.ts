export class ApiConfig {
    postJSON(url: string, params = {}) {
      return new Promise((resolve, reject) => {
        const data = JSON.stringify(params);
        let fetchURL = function () {
          fetch(url, {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            method: 'POST',
            body: data,
          })
            .then(function (obj) {
              resolve(obj);
            })
            .catch(function (error) {
              console.log('ERROR' + error);
              reject(error);
            });
        };
        fetchURL();
      });
    }
  
    //DELETE
    deleteJSON(url: string, params = {}) {
      return new Promise((resolve, reject) => {
        let par = JSON.stringify(params);
        let fetchURL = function () {
          fetch(url, {
            headers: { 'Content-type': 'application/json' },
            method: 'POST',
            body: par,
          })
            .then(res => res.json())
            .then(function (obj) {
              resolve(obj);
            })
            .catch(function (error) {
              reject(error);
            });
        };
        fetchURL();
      });
    }
  }
  