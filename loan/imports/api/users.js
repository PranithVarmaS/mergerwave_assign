// imports/api/users.js
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Users = new Mongo.Collection('users');

Meteor.methods({
  'users.register'(email, role) {
    if (Users.findOne({ email })) {
      throw new Meteor.Error('Email already exists');
    }

    const userId = Users.insert({
      email,
      role,
      loans: [],
    });

    return userId;
  },

  'users.requestLoan'(userId, amount) {
    Users.update(
      { _id: userId },
      {
        $push: {
          loans: {
            amount,
            status: 'pending',
            createdAt: new Date(),
          },
        },
      }
    );
  },
});
