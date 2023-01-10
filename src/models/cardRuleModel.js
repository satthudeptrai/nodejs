const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardRuleModel = new Schema({
  card_rule_id: {
    type: String,
    require: true,
  },
  card_rule_name: {
    type: String,
    require: true,
  },
  card_rule_body: {
    // type: String,
    type: Array,
    require: true,
  },
  card_rule_type: {
    type: String,
    enum: [
      "card-max-count-per-month",
      "card-max-count-per-week",
      "card-mid-blacklist",
      "card-max-count-per-day",
      "card-max-spend-per-week",
      "card-max-spend-per-transaction",
      "card-mcc-whitelist",
      "card-max-spend-per-lifetime",
      "card-mcc-blacklist",
      "card-max-count-per-lifetime",
      "card-mid-whitelist",
      "card-max-spend-per-day",
      "card-max-spend-per-month"
    ],
    require: true,
  },
  card_rule_meta: {
    type: Object,
  },
  card_rule_description: {
    type: String,
  },
});
module.exports = mongoose.model("CardRuleModel", CardRuleModel);
