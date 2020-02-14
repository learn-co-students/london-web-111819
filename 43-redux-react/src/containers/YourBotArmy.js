import React from "react";
import BotCard from "../components/BotCard";
import { connect } from "react-redux";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.bots.map(bot => (
              <BotCard
                bot={bot}
                handleClick={() => this.props.delistBot(bot)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bots: state.botArmyIds.map(botId =>
      state.bots.find(bot => bot.id === botId)
    )
  };
};

const mapDispatchToProps = dispatch => {
  return {
    delistBot: bot => dispatch({ type: "DELIST_BOT", payload: { bot } })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(YourBotArmy);
