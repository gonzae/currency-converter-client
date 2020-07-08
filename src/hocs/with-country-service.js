import React, { Component } from "react";
import CountryService from "../lib/countryService";

export default function (ComposedComponent) {
  class withCountryService extends Component {
    render() {
      const countryService = new CountryService();

      return (
        <ComposedComponent {...this.props} countryService={countryService} />
      );
    }
  }
  return withCountryService;
}
