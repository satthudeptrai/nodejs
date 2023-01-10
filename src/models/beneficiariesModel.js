const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BeneficiariesModel = new Schema({
  beneficiary_id: {
    type: String,
    require: true
  },
  holder_id: {
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
  beneficiary_holder: {
    type: Object,
    require: true
  },
  beneficiary_status: {
    type: String,
    enum: ["beneficiary-status-quarantine", "beneficiary-status-pending", "beneficiary-status-ok", "beneficiary-status-missing-data", "beneficiary-status-declined"],
    require: true
  },
  bank_country: {
    type: String
  },
  bank_name: {
    type: String
  },
  beneficiary_meta: {
    type: Object
  },
  bic_swift: {
    type: String,
  },
  person: {
    type: Object
  },
  company: {
    type: Object,
  },
  entity_type: {
    type: String,
    enum: ["person", "company"]
  },
  default_account: {
    type: Object
  },
  iban: {
    type: String
  },
  missing_data: {
    type: Array
  },
  uk_account_number: {
    type: String
  },
  uk_sort_code: {
    type: String
  },
  screening_monitored_search: {
    type: Boolean
  },
  created_at: {
    type: String
  },
  last_modified_at: {
    type: String
  }
});
module.exports = mongoose.model('BeneficiariesModel', BeneficiariesModel);