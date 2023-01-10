const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BeneficiaryAccountsModel = new Schema({
  account_id: {
    type: String,
    require: true
  },
  beneficiary_id: {
    type: String,
    require: true
  },
  asset_class: {
    type: String,
    enum: ["commodity", "currency"],
    require: true
  },
  asset_type: {
    type: String,
    enum: ["pln", "aud", "chf", "cad", "sek", "goldbloc", "usd", "nok", "whisky", "points", "virtual-currency", "jpy", "huf", "hkd", "nzd", "gold", "czk", "sgd", "ron", "gbp", "hrk", "eur"],
    require: true
  },
  account_number: {
    type: String
  },
  bank_code: {
    type: String
  },
  bank_name: {
    type: String,
  },
  bank_code_type: {
    type: String,
    enum: ["routing-number", "aba", "sort-code", "zengin-code", "biller-code", "bsb"]
  },
  bank_country: {
    type: String
  },
  bic_swift: {
    type: String
  },
  iban: {
    type: String
  },
  created_at: {
    type: String
  },
  last_modified_at: {
    type: String
  }
});
module.exports = mongoose.model('BeneficiaryAccountsModel', BeneficiaryAccountsModel);