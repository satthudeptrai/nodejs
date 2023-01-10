const axios = require('axios');
const TransactionsModel = require('../models/transactionsModel');
class TransactionsController {
  tranferData = async () => {
    try {
      const items_per_page = 100;
      let page_card = 0;
      for( ; ; ) {
        const { data: arrayData } = await axios({
          method: 'get',
          url: '/customer/transactions',
          params: {
            items_per_page: items_per_page,
            offset: page_card * items_per_page,
            // from_date: from_date
          }
        });
        TransactionsModel.create(arrayData);
        if (arrayData.length <= 0) {
          console.log("break")
          break;
        }
        page_card ++;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new TransactionsController;