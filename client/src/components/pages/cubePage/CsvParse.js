import React from "react";
import * as Papa from "papaparse";
import Button from "react-bootstrap/Button";
import "../../css/CsvParse.css";

class CsvParse extends React.Component {
<<<<<<< HEAD
    constructor() {
        super();
        this.state = {
            csvfile: undefined
        };
        this.updateData = this.updateData.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = event => {
        this.setState({
            csvfile: event.target.files[0]
        });
    }

    importCSV = () => {
        const { csvfile } = this.state;
        Papa.parse(csvfile, {
            complete: this.updateData,
            header: true
        });
=======
  constructor() {
    super();
    this.state = {
      csvfile: undefined,
>>>>>>> 12ee430ec48b7952098f03d441984b0b63622b62
    };
    this.updateData = this.updateData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

<<<<<<< HEAD
    updateData(result) {
        let data = result.data;
        let token = localStorage.getItem("jsonwebtoken")

        fetch("http://localhost:3001/api/data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(data),
        })
    }

    render() {
        return (
            <div className="App">
                <h2>Import CSV File!</h2>
                <input
                    className="csv-input"
                    type="file"
                    placeholder={null}
                    onChange={this.handleChange}
                />
                <p />
                <button onClick={this.importCSV}> Upload now! </button>
            </div>
        );
    }
=======
  handleChange = (event) => {
    this.setState({
      csvfile: event.target.files[0],
    });
  };

  importCSV = () => {
    const { csvfile } = this.state;
    Papa.parse(csvfile, {
      complete: this.updateData,
      header: true,
    });
  };

  updateData(result) {
    let data = result.data;
    console.log(data);

    let token = localStorage.getItem("jsonwebtoken");

    fetch("http://localhost:3001/api/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
  }

  render() {
    return (
      <div className="App">
        <div className="csv-container">
          <div className="csv-title">
            <h4>Import CSV File to User Database</h4>
          </div>
          <br />
          <div className="csv-input">
            <input
              type="file"
              placeholder={null}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div className="csv-button">
            <Button variant="light" size="sm" onClick={this.importCSV}>
              Upload now!
            </Button>
          </div>
        </div>
      </div>
    );
  }
>>>>>>> 12ee430ec48b7952098f03d441984b0b63622b62
}

export default CsvParse;
