
const users = require('../test-data/users.json');
const products = require('../test-data/products.json');

function generateUser() {

  return {
    ...users.newUser,

    email: `qa_${Date.now()}_${Math.random()
      .toString(36).slice(2, 8)}@example.com`
  };

}

module.exports = {
  users,
  products,
  generateUser
};
