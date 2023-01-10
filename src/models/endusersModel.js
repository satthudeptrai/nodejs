const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EndusersModel = new Schema({
  beneficiaries: {
    type: Array,
    require: true
  },
  enduser_id: {
    type: String,
    require: true
  },
  enduser_status: {
    type: String,
    enu: ["enduser-status-declined", "enduser-status-pending", "enduser-status-ok", "enduser-status-missing-data", "enduser-status-quarantine"],
    require: true
  },
  ledgers: {
    type: Array,
    require
  },
  person: {
    type: Object
  },
  company: {
    type: Object,
  },
  enduser_meta: {
    type: Object
  },
  missing_data: {
    type: Array
  },
  enduser_kyc_status: {
    type: String,
    enum: ["enduser-kyc-status-error", "enduser-kyc-status-submitted" , "enduser-kyc-status-approved", "enduser-kyc-status-missing-data", "enduser-kyc-status-pending", "enduser-kyc-status-declined"]
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
module.exports = mongoose.model('EndusersModel', EndusersModel);