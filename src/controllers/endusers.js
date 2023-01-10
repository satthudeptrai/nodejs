const axios = require('axios');
const EndusersModel = require('../models/endusersModel');
class EndusersController {
  tranferData = async () => {
    try {
      const items_per_page = 100;
      let page = 0;
      for( ; ; ) {
        const { data } = await axios({
          method: 'get',
          url: '/customer/endusers',
          params: {
            items_per_page: items_per_page,
            offset: page * items_per_page,
            // from_date: from_date
          }
        });
        const detail = data.map(item => {
          return axios({
            method: 'get',
            url: `/customer/endusers/${item.enduser_id}`
          })
        });
        await Promise.all(detail).then(res => {
          const arrayData = res.map(item => item.data);
          EndusersModel.create(arrayData);
        });
        console.log("data", data)
        console.log("page", page)
        if (data.length <= 0) {
          console.log("break")
          break;
        }
        page ++;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new EndusersController;