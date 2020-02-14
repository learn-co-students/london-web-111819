import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

const botsUrl = 'http://localhost:3000/bots'

const fetchBots = () => fetch(botsUrl).then(resp => resp.json())

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    enlistedBotIds: [],
    selectedBotId: null
  }

  componentDidMount() {
    fetchBots()
      .then(bots => this.setState({ bots }))
  }

  enlistBot = bot => {
    if (this.state.enlistedBotIds.includes(bot.id)) return;
    if (this.getEnlistedBots().map(bot => bot.bot_class).includes(bot.bot_class)) return;

    this.setState({
      enlistedBotIds: [...this.state.enlistedBotIds, bot.id]
    })
  }

  delistBot = bot => {
    this.setState({
      enlistedBotIds: this.state.enlistedBotIds.filter(enlistedBotId => enlistedBotId !== bot.id)
    })
  }

  getEnlistedBots = () => this.state.enlistedBotIds
    .map(
      enlistedBotId =>
        this.state.bots.find(bot => bot.id === enlistedBotId)
    )

  getSelectedBot = () => this.state.bots.find(bot => bot.id === this.state.selectedBotId)

  selectBot = bot => this.setState({ selectedBotId: bot.id })

  clearSelectedBot = () => this.setState({ selectedBotId: null })

  render() {

    const selectedBot = this.getSelectedBot()

    return (
      <div>
        <YourBotArmy bots={this.getEnlistedBots()} delistBot={this.delistBot} />
        {
          selectedBot ? <BotSpecs back={this.clearSelectedBot} enlist={() => this.enlistBot(selectedBot)} bot={selectedBot} /> :
            <BotCollection bots={this.state.bots} botClick={this.selectBot} />
        }
      </div>
    );
  }

}

export default BotsPage;
