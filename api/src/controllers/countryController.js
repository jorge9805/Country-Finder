const { Country, Activity } = require("../db");
const axios = require("axios");

const getCountries = async (req, res, next) => {
  try {
    const { name, alphabetic, continent, population } = req.query;
    let allCountries = await Country.findAll({
      include: [
        {
          model: Activity,
        },
      ],
    }); //aca nos falta incluir las actividades con un includes

    if (name) {
      allCountries = allCountries.filter((country) => {
        return country.name.toLowerCase().includes(name.toLowerCase());
      });
    }

    if (alphabetic == "desc") {
      allCountries = allCountries.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    if (alphabetic == "asc" || alphabetic == "") {
      allCountries = allCountries.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }

    if (continent) {
      //vamos a hacer un selector de continentes para que sea exacto
      allCountries = allCountries.filter((country) => {
        return country.continent == continent;
      });
    }
    if (population == "less") {
      allCountries = allCountries.sort((a, b) => a.population - b.population);
    }
    if (population == "more") {
      allCountries = allCountries.sort((a, b) => b.population - a.population);
    }
    res.json(allCountries);
  } catch (error) {
    next(error);
  }
};

const getCountryById = (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  Country.findOne({
    where: {
      id,
    },
    include: [
      {
        model: Activity,
      },
    ],
  })
    .then((country) => res.json(country))
    .catch((error) => next(error));
};
const fromApiToDb = () => {
  axios
    .get("https://restcountries.com/v3.1/all/")
    .then(({ data: countries }) => {
      countries.forEach((country) => {
        Country.create({
          id: country.cca3 || "0",
          name: country.name.common || "0" || "0",
          img: country.flags.svg || "0",
          continent: country.region || "0",
          capital: country.capital ? country.capital[0] : "Capital Not Found",
          region: country.subregion || "Region Not Found",
          area: country.area || 0,
          population: country.population || 0,
        });
      });
      console.log(countries);
    })
    .catch((error) => console.log(error));
};
module.exports = {
  getCountries,
  getCountryById,
  fromApiToDb,
  // getCountriesFromApitoDb,
};

// User.findAll({
//   where: {
//     "$Instruments.size$": { [Op.ne]: "small" },
//   },
//   include: [
//     {
//       model: Tool,
//       as: "Instruments",
//     },
//   ],
// });
//con esta funcion me traje todos los elementos que necesitaba de la api y los guarde en la base de datos
// function fromApitoDb() {
//   axios
//     .get("https://restcountries.com/v2/all/")
//     .then(({ data: countries }) => {
//       countries.forEach((country) => {
//         Country.create({
//           id: country.alpha3Code,
//           name: country.name,
//           img: country.flags[0],
//           continent: country.continent,
//           capital: country.capital,
//           region: country.region,
//           area: country.area,
//           population: country.population,
//         });
//       });
//       console.log("DB is fully created");
//     })
//     .catch((error) => console.log(error));
// }
