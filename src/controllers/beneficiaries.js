const axios = require('axios');
const BeneficiariesModel = require('../models/beneficiariesModel');
const BeneficiaryAccountsModel = require('../models/beneficiaryAccountsModel');
class BeneficiariesController {
  tranferData = async () => {
    try {
      const items_per_page = 100;
      let page = 0;
      for( ; ; ) {
        const { data: arrayData } = await axios({
          method: 'get',
          url: '/customer/beneficiaries',
          params: {
            items_per_page: items_per_page,
            offset: page * items_per_page,
            // from_date: from_date
          }
        });
        const promiseBeneficiariesId = arrayData.map(item => {
          return axios({
            method: 'get',
            url: `/customer/beneficiaries/${item.beneficiary_id}/accounts`
          })
        })
        await Promise.all(promiseBeneficiariesId).then(async res => {
          const listAccountId = res.reduce((arrayTemp, item) => {
            return [...arrayTemp, ...item.data];
          }, []);
          const pomiseAccountId = listAccountId.map(item => {
            return axios({
              method: 'get',
              url: `/customer/beneficiary-accounts/${item.account_id}/`
            })
          })
          await Promise.all(pomiseAccountId).then(async res1 => {
            const listAccount = res1.map(item1 => item1.data);
            await BeneficiaryAccountsModel.create(listAccount);
          })
        })
        await BeneficiariesModel.create(arrayData);
        if (arrayData.length <= 0) {
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
module.exports = new BeneficiariesController;