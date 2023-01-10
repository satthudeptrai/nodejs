const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardModel = new Schema({
  card_id: {
    type: String,
    require: true,
  },
  ledger_id: {
    type: String,
    require: true,
  },
  card_design: {
    type: String,
    require: true,
  },
  card_programme: {
    type: String,
    require: true,
  },
  card_type: {
    type: String,
    enum: ["virtual", "physical"],
    require: true,
  },
  card_status: {
    type: String,
    enum: [
      "card-status-active",
      "card-status-failed",
      "card-status-reactivating",
      "card-status-suspending",
      "card-status-awaiting-activation",
      "card-status-created",
      "card-status-closing",
      "card-status-suspended",
      "card-status-closed",
      "card-status-activating",
      "entity-status-internal-error",
    ],
    require: true,
  },
  partner_product: {
    type: String,
    enum: [
      "Railsbank-Credit-Card-2",
      "Railsbank-Debit-Card-4",
      "Railsbank-Credit-Card-1",
      "Railsbank-Debit-Card-3",
      "Railsbank-Debit-Card-5",
      "Railsbank-Debit-Card-2",
    ],
    require: true,
  },
  created_at: {
    type: String,
    require: true,
  },
  card_carrier_type: {
    type: String,
    enum: ["renewal", "replacement", "standard"],
  },
  card_delivery_address: {
    type: Object,
  },
  card_delivery_method: {
    type: String,
    enum: ["standard-first-class", "international-mail", "dhl", "courier"],
  },
  card_delivery_name: {
    type: String,
  },
  card_expiry_date: {
    type: String,
  },
  card_rules: {
    type: Array,
  },
  card_status_reason: {
    type: String,
    enum: [
      "card-stolen",
      "card-reissue-closed",
      "card-destroyed",
      "card-lost",
      "card-activation-failed",
      "card-reissue-activated",
    ],
  },
  card_token: {
    type: String,
  },
  email: {
    type: String,
  },
  name_on_card: {
    type: String,
  },
  qr_code_content: {
    type: String,
  },
  reissued_card_id: {
    type: String,
  },
  reissued_card_token: {
    type: String,
  },
  replaced_card_id: {
    type: String,
  },
  replaced_card_token: {
    type: String,
  },
  telephone: {
    type: String,
  },
  truncated_pan: {
    type: String,
  }
});
module.exports = mongoose.model("CardModel", CardModel);
