import React from "react";
import BotCard from "../components/BotCard";

import { connect } from "react-redux";

class BotCollection extends React.Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.bots.map(bot => (
            <BotCard bot={bot} handleClick={() => this.props.botClick(bot)} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bots: state.bots
  };
};

const mapDispatchToProps = dispatch => {
  return {
    botClick: bot => dispatch({ type: "SELECT_BOT", payload: { bot } })
  };
};

const connectComponentWithProps = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = connectComponentWithProps(BotCollection);

export default connectedComponent;
