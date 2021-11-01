const { Router } = require("express");
const router = Router();
const {
  getCountries,
  getCountryById,
  // getCountriesFromApitoDb,
} = require("../controllers/countryController");
router.get("/", getCountries);
router.get("/:id", getCountryById);

// router.get("/", getCountriesFromApitoDb);
module.exports = router;
