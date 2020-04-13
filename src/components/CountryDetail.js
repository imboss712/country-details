import React from "react";
import numeral from "numeral";
import {
  Grid,
  Image,
  Container,
  Segment,
  Header,
  Dimmer,
  Loader,
} from "semantic-ui-react";
import "../styles/CountryDetail.css";

const CountryDetail = ({
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
}) => {
  if (!name) {
    return (
      <div>
        <Container fluid className="CountryContainer">
          <Segment>
            <Dimmer active inverted>
              <Loader inverted content="Loading" />
            </Dimmer>
            <br />
            <br />
            <br />
            <br />
            <br />
          </Segment>
        </Container>
      </div>
    );
  }

  const newLanguageArray = languages.filter((language) => {
    if (languages.indexOf(language) > 2) {
      return false;
    }
    return true;
  });

  const countryLanguages = newLanguageArray.map((language) => {
    return <Segment key={language.iso639_2}>{language.name}</Segment>;
  });

  const newTimezoneArray = timezones.filter((timezone) => {
    if (timezones.indexOf(timezone) > 2) {
      return false;
    }
    return true;
  });

  const countryTimezones = newTimezoneArray.map((timezone, i) => {
    return <Segment key={i}>{timezone}</Segment>;
  });

  return (
    <div>
      <Container fluid className="CountryContainer">
        <div className="CountryTitle">
          <Segment.Group style={{ textAlign: "center" }}>
            <Segment textAlign="center">
              <Header as="h1">{name}</Header>
            </Segment>
            <Segment>
              <div style={{ verticalAlign: "middle" }}>
                <Image src={flag} size="small" centered />
              </div>
            </Segment>
          </Segment.Group>
        </div>

        <Grid stackable columns={3} className="CountryGrid">
          <Grid.Column>
            <Segment.Group>
              <Segment>
                <strong>Country</strong>
              </Segment>
              <Segment>{name}</Segment>
            </Segment.Group>
          </Grid.Column>

          <Grid.Column>
            <Segment.Group>
              <Segment>
                <strong>Capital</strong>
              </Segment>
              <Segment>{capital}</Segment>
            </Segment.Group>
          </Grid.Column>

          <Grid.Column>
            <Segment.Group>
              <Segment>
                <strong>Region</strong>
              </Segment>
              <Segment>{region}</Segment>
            </Segment.Group>
          </Grid.Column>

          <Grid.Column>
            <Segment.Group>
              <Segment>
                <strong>Subregion</strong>
              </Segment>
              <Segment>{subregion}</Segment>
            </Segment.Group>
          </Grid.Column>

          <Grid.Column>
            <Segment.Group>
              <Segment>
                <strong>Demonym</strong>
              </Segment>
              <Segment>{demonym}</Segment>
            </Segment.Group>
          </Grid.Column>

          <Grid.Column>
            <Segment.Group>
              <Segment>
                <strong>Currency</strong>
              </Segment>
              <Segment>{currencies[0].name}</Segment>
            </Segment.Group>
          </Grid.Column>

          <Grid.Column>
            <Segment.Group>
              <Segment>
                <strong>Population</strong>
              </Segment>
              <Segment>{numeral(population).format()}</Segment>
            </Segment.Group>
          </Grid.Column>

          <Grid.Column>
            <Segment.Group>
              <Segment>
                <strong>Area</strong>
              </Segment>
              <Segment>
                {numeral(area).format()} km<sup>2</sup>
              </Segment>
            </Segment.Group>
          </Grid.Column>

          <Grid.Column>
            <Segment.Group>
              <Segment>
                <strong>Alpha2 Code</strong>
              </Segment>
              <Segment>{alpha2Code}</Segment>
            </Segment.Group>
          </Grid.Column>

          <Grid.Column>
            <Segment.Group>
              <Segment>
                <strong>Alpha3 Code</strong>
              </Segment>
              <Segment>{alpha3Code}</Segment>
            </Segment.Group>
          </Grid.Column>

          <Grid.Column>
            <Segment.Group>
              <Segment>
                <strong>Calling Code</strong>
              </Segment>
              <Segment>+{callingCodes[0]}</Segment>
            </Segment.Group>
          </Grid.Column>

          <Grid.Column>
            <Segment.Group>
              <Segment>
                <strong>Top Level Domain</strong>
              </Segment>
              <Segment>{topLevelDomain[0]}</Segment>
            </Segment.Group>
          </Grid.Column>

          <Grid.Column>
            <Segment.Group>
              <Segment>
                <strong>Location</strong>
              </Segment>
              <Segment.Group horizontal>
                <Segment>Latitude: {latlng[0]}</Segment>
                <Segment>Longitude: {latlng[1]}</Segment>
              </Segment.Group>
            </Segment.Group>
          </Grid.Column>

          <Grid.Column>
            <Segment.Group>
              <Segment>
                <strong>Languages</strong>
              </Segment>
              <Segment.Group horizontal>{countryLanguages}</Segment.Group>
            </Segment.Group>
          </Grid.Column>

          <Grid.Column>
            <Segment.Group>
              <Segment>
                <strong>Timezones</strong>
              </Segment>
              <Segment.Group horizontal>{countryTimezones}</Segment.Group>
            </Segment.Group>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
};

export default CountryDetail;
