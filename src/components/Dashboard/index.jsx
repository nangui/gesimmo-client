import React, { Component } from 'react'
import './index.scss'
import CardStat from './CardStat';
class Dashboard extends Component {

  constructor(props) {
    super(props)

    this.state = {
      url: 'http://localhost:8080/api/parametrage/stats',
      stats: {},
      message: ''
    }
  }

  componentDidMount() {
    this.getState()
  }

  getState = () => {
    fetch(`${this.state.url}`, {
      method: 'GET',
      mode: "cors",
      cache: "reload"
    })
    .then(response => response.json())
    .then(json => {
      const data = json.data
      const message = json.message
      this.setState({
        stats: data,
        message
      })

      console.log(json)
    })
    .catch(err => console.log(err))
  }

  extractLink = (words) => {
    var n = words.split(" ");
    return n[n.length - 1].toLowerCase();
  }

  render() {
    return (
      <div className="container-fluid" id="dashboard-wrapper">
        <div className="row">
          {
            Object.keys(this.state.stats).map(
              key => <CardStat 
                key={key} 
                title={key} 
                number={this.state.stats[key]} 
                link={this.extractLink(key)} />
            )
          }
        </div>
      </div>
    )
  }
}

export default Dashboard;
