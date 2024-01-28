// imports/api/transactions.js
import { Meteor } from 'meteor/meteor';
import { Transactions } from './transactions';

Meteor.methods({
  'transactions.confirmPayment'(userId, loanId) {
    Transactions.insert({
      userId,
      loanId,
      status: 'confirmed',
      createdAt: new Date(),
    });

    Users.update(
      { _id: userId, 'loans._id': loanId },
      { $set: { 'loans.$.status': 'confirmed' } }
    );
  },
});
