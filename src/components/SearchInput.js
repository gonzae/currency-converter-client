import React, { PureComponent } from "react";
import PropTypes from "prop-types";

// For knowing if the user stopped typing
const WAIT_INTERVAL = 1000;
const ENTER_KEY = 13;

export class SearchInput extends PureComponent {
  static propTypes = {
    searchCountries: PropTypes.func,
    onResults: PropTypes.func,
  };

  state = {
    needle: "",
    isLoading: false,
  };

  _handleChange = (e) => {
    const needle = e.target.value;

    clearTimeout(this.timer);

    this.setState({ needle });

    if (needle.length < 3) {
      this.props.onResults([]);
      return;
    }

    this.timer = setTimeout(this._triggerChange, WAIT_INTERVAL);
  };

  componentDidMount() {
    this.timer = null;
  }

  _handleKeyDown = (e) => {
    if (e.keyCode === ENTER_KEY) {
      this._triggerChange();
    }
  };

  _triggerChange = () => {
    this._searchResults(this.state.needle);
  };

  _searchResults = async (needle) => {
    this.setState({ isLoading: true });

    const results = await this.props.searchCountries(needle);
    this.props.onResults(results);
    this.setState({ isLoading: false });
  };

  render() {
    return (
      <div className="SearchInput">
        <div className="field">
          <div
            className={
              "control is-large " + (this.state.isLoading ? "is-loading" : "")
            }
          >
            <input
              className="input is-large"
              type="text"
              placeholder="Start typing a country name..."
              onChange={this._handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
