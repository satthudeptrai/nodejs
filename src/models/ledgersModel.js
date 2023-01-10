const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LedgersModel = new Schema({
  ledger_id: {
    type: String,
    require: true,
  },
  amount: {
    type: Number,
    require: true,
  },
  asset_class: {
    type: String,
    enum: ["commodity", "currency"],
    require: true,
  },
  asset_type: {
    type: String,
    enum: [
      "pln",
      "aud",
      "chf",
      "cad",
      "sek",
      "goldbloc",
      "usd",
      "nok",
      "whisky",
      "points",
      "virtual-currency",
      "jpy",
      "huf",
      "hkd",
      "nzd",
      "gold",
      "czk",
      "sgd",
      "ron",
      "gbp",
      "hrk",
      "eur"
    ],
    require,
  },
  ledger_status: {
    type: String,
    enum: [
      "ledger-status-permanently-closed",
      "ledger-status-ok",
      "ledger-status-pending",
      "ledger-status-error",
      "ledger-status-unassigned",
      "ledger-status-declined",
      "ledger-status-closing",
      "ledger-status-pending-partner",
      "ledger-status-missing-data"
    ],
    require,
  },
  partner_id: {
    type: String,
    require: true
  },
  partner: {
    type: Object,
    require: true
  },
  partner_product: {
    type: String,
    enum: [
      "ExampleBank-SGD-2",
      "PayrNet-SGD-2",
      "Banking-AUD-1",
      "PayrNet-SGD-1",
      "ExampleBank-SG-1",
      "Railsbank-Rewards-1",
      "ExampleBank-SGD-1",
      "Railsbank-Credit-Card-2",
      "PayrNet-GBP-Debit-Send",
      "PayrNet-GBP-2",
      "Railsbank-Direct-Debit-1",
      "ExampleBank-USD-1",
      "Railsbank-KYC-4",
      "ExampleBank-AUD-1",
      "ExampleBank-FX-1",
      "PayrNet-USD-1",
      "ExampleBank-USD-2",
      "ExampleBank-EUR-3",
      "Railsbank-KYC-1",
      "Railsbank-Debit-Card-4",
      "ExampleBank-GBP-2",
      "Railsbank-Credit-Card-1",
      "Goldbloc-Conversion-1",
      "Railsbank-KYC-5",
      "Railsbank-AML-Screening-1",
      "S-Debit-Card-5",
      "PayrNet-EUR-3",
      "S-Debit-Card-3",
      "Railsbank-USD-Credit-1",
      "S-Debit-Card-8",
      "S-Debit-Card-6",
      "Banking-EU-1",
      "Onfido-IDV-1",
      "ExampleBank-EUR-1",
      "S-Debit-Card-1",
      "S-Debit-Card-7",
      "Railsbank-Debit-Card-3",
      "PayrNet-EUR-1",
      "Railsbank-Conversion-1",
      "PayrNet-GBP-1",
      "Railsbank-Debit-Card-1",
      "Railsbank-Virtual-1",
      "Railsbank-KYC-2",
      "ExampleBank-USD-Credit-1",
      "Railsbank-Debit-Card-5",
      "S-Debit-Card-4",
      "ExampleBank-GBP-Debit-Send",
      "ExampleBank-GBP-1",
      "Banking-SG-1",
      "S-Debit-Card-2",
      "Railsbank-Identity-and-Verification-Service-1",
      "ExampleBank-Direct-Debit-1",
      "Railsbank-Debit-Card-2",
      "ExampleBank-EU-1",
    ],
    require,
  },
  partner_ref: {
    type: String,
  },
  reserved_amount: {
    type: Number,
  },
  total_amount: {
    type: Number,
  },
  account_number: {
    type: String,
  },
  bic_swift: {
    type: String,
  },
  bsb_number: {
    type: String,
  },
  credit_details_id: {
    type: String,
  },
  failure_reasons: {
    type: Array,
  },
  holder_id: {
    type: String,
  },
  iban: {
    type: String,
  },
  ledger_close_reason: {
    type: String,
    enum: ["customer-request", "partner-request"]
  },
  ledger_holder: {
    type: Object,
  },
  ledger_iban_status: {
    type: String,
    enum: ["ledger-iban-status-pending", "ledger-iban-status-declined", "ledger-iban-status-ok"]
  },
  ledger_meta: {
    type: Object,
  },
  ledger_primary_use_types: {
    type: [String],
    enum: [
      "ledger-primary-use-types-deposit",
      "ledger-primary-use-types-payments",
      "ledger-primary-use-types-settlement",
      "ledger-primary-use-types-float",
      "ledger-primary-use-types-fees",
      "ledger-primary-use-types-suspense",
      "ledger-primary-use-types-investment",
      "ledger-primary-use-types-collateral",
      "ledger-primary-use-types-escrow"
    ]
  },
  ledger_t_and_cs_country_of_jurisdiction: {
    type: String,
  },
  ledger_type: {
    type: String,
    enum: ["ledger-type-single-user", "ledger-type-omnibus"]
  },
  ledger_who_owns_assets: {
    type: String,
    enum: ["ledger-assets-owned-by-me", "ledger-assets-owned-by-other"]
  },
  missing_data: {
    type: Array,
  },
  routing_number: {
    type: String,
  },
  uk_account_number: {
    type: String,
  },
  uk_sort_code: {
    type: String,
  },
  created_at: {
    type: String,
  },
  last_modified_at: {
    type: String,
  }
});
module.exports = mongoose.model("LedgersModel", LedgersModel);
