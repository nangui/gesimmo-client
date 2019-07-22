import React, { Component } from 'react'
import './index.scss'

import {
  Button,
  Table
} from 'reactstrap';

export default class Bien extends Component {

  constructor(props) {
    super(props)

    this.state = {
      url: `http://localhost:8080/api/biens`,
      biens: [],
      message: ''
    }
  }

  componentDidMount() {
    this.loadBiens()
  }

  loadBiens() {
    fetch(`${this.state.url}`, {
      method: 'GET',
      mode: "cors",
      cache: "reload"
    })
    .then(response => response.json())
    .then(json => {
      const data = json.data
      const message = json.message
      console.log(data)
      this.setState({
        biens: data,
        message: message
      })
    })
  }

  addBien() {
    
  }

  render() {
    return (
      <div className="container-fluid" id="bien-wrapper">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="px-3 w-100 mb-4">
              <div className="text-right">
                <Button className="btn btn-sm btn-success">Ajouter un bien</Button>
              </div>
            </div>
            <div className="px-3">
              <div className="table-responsive py-4 card-box">
                <Table striped>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
