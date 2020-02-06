import React from 'react'

class NotFound extends React.Component {
  state = {
    countdown: 5
  }

  decreaseCountdown = () => {
    this.setState({ countdown: this.state.countdown - 1 })
  }

  tick = () => {
    if (this.state.countdown <= 0) this.props.history.push('/')
    else this.decreaseCountdown()
  }

  componentDidMount () {
    this.handle = setInterval(this.tick, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.handle)
  }

  render () {
    const { countdown } = this.state
    return (
      <div>
        <h1>404 - Page not found.</h1>
        <p>Beaming you up in: {countdown > 0 ? countdown : 'SEE YA!'}</p>
      </div>
    )
  }
}

export default NotFound
