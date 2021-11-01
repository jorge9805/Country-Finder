const { Country, Activity, Op } = require("../db");
const deleteAllActivities = async (req, res, next) => {
  try {
    await Activity.destroy({
      where: {},
    });
    res.json("deleted succesfull");
  } catch (error) {
    next(error);
  }
};
const postActivity = async (req, res, next) => {
  const { name, duration, difficulty, season, countries } = req.body; // country va a ser un array de countries para que le pasemos varios nombre de countries
  try {
    const newActivity = await Activity.create({
      name,
      duration,
      difficulty,
      season,
    });
    const countriesDb = await Country.findAll({
      where: {
        name: {
          [Op.or]: countries,
        },
      },
    });
    newActivity.addCountries(countriesDb);
    res.json("Activity added succesfully");
  } catch (error) {
    next(error);
  }
};

const getActivities = async (req, res) => {
  const activities = await Activity.findAll({ include: [{ model: Country }] });
  res.json(activities);
};
module.exports = {
  postActivity,
  getActivities,
  deleteAllActivities,
};
// const { Op } = require("sequelize");
// Post.findAll({
//   where: {
//     [Op.or]: [{ authorId: 12 }, { authorId: 13 }],
//   },
// });

// // SELECT * FROM post WHERE authorId = 12 OR authorId = 13;
// Since the above was an OR involving the same field, Sequelize allows you to use a slightly different structure which is more readable and generates the same behavior:

// const { Op } = require("sequelize");
// Post.destroy({
//   where: {
//     authorId: {
//       [Op.or]: [12, 13]
//     }
//   }
// });
// // DELETE FROM post WHERE authorId = 12 OR authorId = 13;
