import React, { PureComponent } from "react";

import config from "../config";

const baseCurrency = config.baseCurrency;

export class AmountInput extends PureComponent {
  state = {
    value: "",
  };

  _handleChange = (e) => {
    let value = parseFloat(e.target.value);
    if (!Number.isNaN(value)) {
      this.setState({ value });
      this.props.onValueChange(value);
    } else {
      this.setState({ value: "" });
    }
  };

  render() {
    return (
      <div className="AmountInput">
        <div className="field">
          <div className="control">
            <input
              className="input is-large"
              type="number"
              placeholder={"Add amount in " + baseCurrency + ", e.g., 1.75"}
              value={this.state.value}
              onChange={this._handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
