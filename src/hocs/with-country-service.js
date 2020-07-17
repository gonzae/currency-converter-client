import React, { Component } from "react";
import CountryService from "../lib/countryService";

export default function (ComposedComponent) {
  class withCountryService extends Component {
    constructor(props) {
      super(props);

      this.countryService = new CountryService();
    }

    render() {
      return (
        <ComposedComponent
          {...this.props}
          countryService={this.countryService}
        />
      );
    }
  }
  return withCountryService;
}
