import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";
import { connect } from "react-redux";

const botsUrl = "http://localhost:3000/bots";

const fetchBots = () => fetch(botsUrl).then(resp => resp.json());

class BotsPage extends React.Component {
  //start here with your code for step one

  componentDidMount() {
    fetchBots().then(bots => this.props.setBots(bots));
  }

  render() {
    const { selectedBot } = this.props;

    return (
      <div>
        <YourBotArmy />
        {selectedBot ? <BotSpecs bot={selectedBot} /> : <BotCollection />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedBot: state.bots.find(bot => bot.id === state.selectedBotId)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setBots: bots => dispatch({ type: "SET_BOTS", payload: { bots } })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BotsPage);
