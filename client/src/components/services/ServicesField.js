import _ from 'lodash';
import React, { Component } from 'react';

import { LABELDIV, LI } from '../styledComponents/Services';

class ServicesField extends Component {

  state = {
    gameSearch: ""
  }

  changeType(e) {
    this.props.changeType(e.target.value)
  }

  lookupGames(e) {
    this.setState({ gameSearch: e.target.value })
    if (e.target.value.length > 3) {
      this.props.searchGames(e.target.value)
    } else {
      this.props.clearSelectedGame()
    }
  }

  selectGame(game) {
    this.setState({ gameSearch: game.name })
    this.props.selectGame(game)
  }

  renderInput(name) {
    const { input, placeholder, serviceType } = this.props
    input.placeholder = typeof placeholder === 'string' ? placeholder : placeholder[serviceType]
    switch (name) {
      case 'type':
        input.value = serviceType
        input.onChange = this.changeType.bind(this)
        return <select {...input} style={{ marginBottom: '5px', width: '75%' }}>{this.renderTypeOptions(this.props.options)}</select>;
      case 'description':
        input.rows = "3"
        return <textarea {...input} style={{ marginBottom: '5px', width: '75%', resize: 'none' }}></textarea>
      case 'game':
        input.type = "hidden"
        input.value = this.props.selectedGame.name || ""
        return (
          <div>
            <input style={{ marginBottom: '5px', width: '75%' }} value={this.state.gameSearch} onChange={this.lookupGames.bind(this)} />
            {this.renderSearchedGames(this.props.games)}
            <input {...input} />
          </div>
        )
      case 'platform':
        return <select {...input} style={{ marginBottom: '5px', width: '75%' }}>{this.renderPlatformOptions(this.props.platforms)}</select>
      default:
        return <input {...input} style={{ marginBottom: '5px', width: '75%' }} />
    }
  }

  renderTypeOptions(options) {

    const labels = {
      "carries": "Help carry other gamers",
      "goals": "Get carried by another gamer"
    }

    return _.map(options, (option, i) => {
      return <option key={i} value={option}>{labels[option]}</option>
    });
  }

  renderPlatformOptions(platforms) {
    return _.map(platforms, (platform, i) => {
      return <option key={i} value={platform}>{platform}</option>
    });
  }

  renderSearchedGames(games) {
    if (games.length) {
      return (
        <div className="row">
          <ul style={{ listStyle: 'none', textAlign: 'left' }}>
            {this.renderGameResults(games)}
          </ul>
        </div>
      )
    }
    return
  }

  renderGameResults(games) {
    return _.map(games, (game, i) => {
      return (
        <a key={i} onClick={() => this.selectGame(game)} style={{ cursor: 'pointer' }}>
          <LI className="col-xs-12" style={{ marginTop: '10px' }}>
            <div className="row">
              <div className="col-xs-2">
                <img src={"https:" + game.cover.url} alt="game cover" height="35" width="35" style={{ borderRadius: '50%' }} />
              </div>
              <div className="col-xs-10" style={{ paddingTop: '5px' }}>
                {game.name}
              </div>
            </div>
          </LI>
        </a>
      )
    });
  }

  render() {
    const { label, input, meta: { error, touched } } = this.props;

    return (
      <div className="col-sm-12" style={{ marginTop: '10px' }}>
        <div className="row">
          <div className="col-sm-2"></div>
          <LABELDIV className="col-sm-2 col-xs-12" style={{ textAlign: 'left' }}>
            <label style={{ fontSize: '16px' }}>{label}</label>
          </LABELDIV>
          <div className="col-sm-6 col-xs-12">
            {this.renderInput(input.name)}
          </div>
          <div className="col-sm-2"></div>
          <div className="text-danger col-sm-10 col-sm-offset-2" style={{ marginBottom: '20px' }}>
            {touched && error}
          </div>
        </div>
      </div>
    );
  }
}

export default ServicesField;