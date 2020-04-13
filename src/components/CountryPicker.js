import _ from "lodash";
import React, { Component } from "react";
import {
  Segment,
  Header,
  Icon,
  Search,
  Container,
  Dimmer,
  Loader,
} from "semantic-ui-react";
import { getAllCountry } from "../api/index";
import "../styles/ContryPicker.css";

const initialState = { isLoading: false, results: [], value: "", country: "" };

class CountryPicker extends Component {
  state = {
    ...initialState,
    source: [],
  };

  handleResultSelect = (e, { result }) => {
    this.setState({ value: result.title, country: result.code });
    this.props.handleCountryChange(result.code);
    setTimeout(() => {
      this.setState({ value: "" });
    }, 2500);
  };

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState);

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      const isMatch = (result) => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter(this.state.source, isMatch),
      });
    }, 300);
  };

  async componentDidMount() {
    const data = await getAllCountry();
    this.setState({ source: data });
  }

  render() {
    const { isLoading, value, results, source } = this.state;

    const searchbox = (
      <Search
        fluid
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={_.debounce(this.handleSearchChange, 500, {
          leading: true,
        })}
        results={results}
        value={value}
        placeholder="Search Country..."
        {...this.props}
      />
    );

    if (!source || source.length === 0) {
      return (
        <div>
          <Container fluid className="SearchContainer">
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
    } else {
      return (
        <div>
          <Container fluid className="SearchContainer">
            <Segment className="SearchSegment" style={{ padding: "50px 20px" }}>
              <Header icon className="SearchHeader">
                <Icon name="search" />
                Find Country
              </Header>
              <div className="SearchBox">{searchbox}</div>
            </Segment>
            <div className="SearchBoxMobile">{searchbox}</div>
          </Container>
        </div>
      );
    }
  }
}

export default CountryPicker;
