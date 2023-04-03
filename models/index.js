const User = require('./User');
const Car = require('./Car');
const Review = require('./Review');

User.hasMany(Review, {
  foreignKey: 'user_id',
});

Car.belongsTo(Review, {
  foreignKey: 'car_id',
});

Car.hasMany(Review,{
  foreignKey: 'car_id',
})


module.exports = { User, Car, Review };
