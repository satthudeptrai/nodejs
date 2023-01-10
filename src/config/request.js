const axios = require('axios');
const AUTH_TOKEN = "API-Key yt16m1a9di5j8ehlgzmse79lr2f2arg7#ysun3z8r1j5egdi7y92u73siqada8525jp7qwatzf6tjtzufw8gy5kb06dgzr01b";
const setup = () => {
  axios.defaults.baseURL = 'https://playlive.railsbank.com/v1/';
  axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
}
module.exports = setup;