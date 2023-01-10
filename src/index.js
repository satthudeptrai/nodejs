const { connect, disconnect } = require('./config/db/index');
const setup = require('./config/request');
const EndusersController = require('./controllers/endusers');
const BeneficiariesController = require('./controllers/beneficiaries');
const CardController = require('./controllers/cards');
const LedgerController = require('./controllers/ledgers');
const TransactionsController = require('./controllers/transactions');
const traferData = async () => {
  await setup();
  await connect();
  // await EndusersController.tranferData();
  // await BeneficiariesController.tranferData();
  // await CardController.tranferData();
  // await LedgerController.tranferData();
  await TransactionsController.tranferData();
  await disconnect();
};
traferData();