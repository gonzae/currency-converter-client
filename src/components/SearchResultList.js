import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { SearchResult } from "./SearchResult";

export class SearchResultList extends PureComponent {
  static propTypes = {
    countries: PropTypes.array,
    onSelect: PropTypes.func,
  };

  static defaultProps = {
    countries: [],
  };

  render() {
    const { countries, onSelect } = this.props;

    return (
      <div className="SearchResultList">
        {countries.map((country) => {
          return (
            <div
              key={country.name}
              onClick={() => onSelect(country.name)}
              className="SearchResultList-item"
            >
              <SearchResult {...country} />
            </div>
          );
        })}
      </div>
    );
  }
}
