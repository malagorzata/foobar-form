import React from "react";
import InputMask from "react-input-mask";
import Cards from "react-credit-cards";
import { Input } from "antd";

class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
    cardnumberValid: true,
    dateValid: true,
    cvcValid: true,
    nameValid: true,
  };

  handleNameValid = (e) => {
    if (e.target.value.length < 2) {
      this.setState({ nameValid: false });
    } else {
      this.setState({ nameValid: true });
    }
  };

  handleCreditCardValid = (e) => {
    if (e.target.value.length !== 19) {
      this.setState({ cardnumberValid: false });
    } else {
      this.setState({ cardnumberValid: true });
    }
  };

  handleCVCValid = (e) => {
    if (e.target.value.length !== 3) {
      this.setState({ cvcValid: false });
    } else {
      this.setState({ cvcValid: true });
    }
  };

  handleDateValid = (e) => {
    if (e.target.value.length !== 5) {
      this.setState({ dateValid: false });
    } else {
      this.setState({ dateValid: true });
    }
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div id="payment_form">
        <div className="">
          <Cards cvc={this.state.cvc} expiry={this.state.expiry} focused={this.state.focus} name={this.state.name} number={this.state.number} />
        </div>
        <div className="card_container">
          <div className="form-control">
            <label htmlFor="name">Name on the card</label>

            <Input name="name" type="text" placeholder="Enter your full name" minLength="2" value={this.name} required onChange={this.handleInputChange} onFocus={this.handleInputFocus} onBlur={this.handleNameValid} />
            <p className={`${this.state.nameValid ? "hidden" : "errormessage"}`}>Please enter your full name</p>
          </div>

          <div className="form-control">
            <label htmlFor="cardnumber">Card number</label>
            <InputMask
              name="number"
              id="cardnumber"
              placeholder="Enter your card number"
              type="tel"
              required
              mask="9999 9999 9999 9999"
              value={this.number}
              maskChar=""
              onChange={this.handleInputChange}
              onBlur={this.handleCreditCardValid}
            ></InputMask>
            <p className={`${this.state.cardnumberValid ? "hidden" : "errormessage"}`}>Please enter a valid CC number</p>
          </div>

          <div className="form-group">
            <div className="form-control">
              <label htmlFor="monthyear">Expiry date</label>
              <InputMask
                name="expiry"
                id="monthyear"
                mask="99/99"
                type="text"
                placeholder="MM/YY"
                maskChar=""
                required
                value={this.monthyear}
                onBlur={this.handleDateValid}
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              ></InputMask>
              <p className={`${this.state.dateValid ? "hidden" : "errormessage"}`}>Enter mm/yy</p>{" "}
            </div>

            <div className="form-control">
              <label htmlFor="cvc">CVC</label>
              <input type="tel" minLength="3" maxLength="3" name="cvc" className="form-control" placeholder="CVC" pattern="\d{3,4}" required onChange={this.handleInputChange} onFocus={this.handleInputFocus} onBlur={this.handleCVCValid} />
              <p className={`${this.state.cvcValid ? "hidden" : "errormessage"}`}>Enter CVC code</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentForm;
