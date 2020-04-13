import axios from "axios";

const url = "https://restcountries.eu/rest/v2";

const getAllCountry = async () => {
  try {
    const { data } = await axios.get(`${url}/all`);
    const countries = data.map((country) => {
      return {
        title: country.name,
        code: country.alpha3Code,
        description: country.subregion,
        image: country.flag,
      };
    });
    return countries;
  } catch (err) {
    console.log(err);
  }
};

const getCountryDetails = async (country) => {
  try {
    const {
      data: {
        alpha2Code,
        alpha3Code,
        callingCodes,
        topLevelDomain,
        name,
        capital,
        flag,
        demonym,
        region,
        subregion,
        currencies,
        population,
        area,
        languages,
        latlng,
        timezones,
      },
    } = await axios.get(`${url}/alpha/${country}`);

    return {
      alpha2Code,
      alpha3Code,
      callingCodes,
      topLevelDomain,
      name,
      capital,
      flag,
      demonym,
      region,
      subregion,
      currencies,
      population,
      area,
      languages,
      latlng,
      timezones,
    };
  } catch (err) {
    console.log(err);
  }
};

export { getAllCountry, getCountryDetails };
