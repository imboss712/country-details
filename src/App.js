import React, { Component } from "react";
import { getCountryDetails } from "./api/index";
import CountryDetails from "./components/CountryDetail";
import CountryPicker from "./components/CountryPicker";
import "./styles/App.css";

class App extends Component {
  state = {
    Details: {},
  };

  handleCountryChange = async (country) => {
    const Details = await getCountryDetails(country);
    this.setState({ Details });
  };

  async componentDidMount() {
    const Details = await getCountryDetails("IND");
    this.setState({ Details });
  }

  render() {
    return (
      <div className="App">
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <CountryDetails data={this.state.Details} />
      </div>
    );
  }
}

export default App;
