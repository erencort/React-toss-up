import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "tura",
      flipping: false,
      clickCount: 0,
      turaCount: 0,
      number: Math.floor(Math.random()*2)
    };
  }
  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    this.setState({ flipping: true});
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({ flipping: false }), 1000);
    this.clickCountSet()
    this.sideChecker()
  };

  clickCountSet = () => {
    this.setState({clickCount : this.state.clickCount + 1})
  }
  
  sideChecker = () => {
    this.setState({ number: Math.floor(Math.random()*2) })
    if(this.state.number == 0) {
      this.setState({side: "tura"})
      this.setState({turaCount: this.state.turaCount + 1})
    } else {this.setState({side: "yazi"})}
  }

  resetClick = () => {
    this.setState({clickCount:0})
    this.setState({turaCount:0})
  }

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <button onClick={this.resetClick}>Reset</button>
        <p>{this.state.side} geldi.</p>
        <br />
        <p>
          Toplam
          <strong> {this.state.clickCount} </strong>
          atıştan
          <strong> {this.state.turaCount} </strong>ü tura
          <strong> {this.state.clickCount - this.state.turaCount} </strong>
          si yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
