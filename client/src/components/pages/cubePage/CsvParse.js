import React from "react"
import * as Papa from "papaparse"

class CsvParse extends React.Component {
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
        console.log("line 28 " + (this.state.csvfile))


    };

    updateData(result) {
        var data = result.data;
        console.log(data);

        fetch("http://localhost:3001/api/data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
    }

    render() {
        console.log(this.state.csvfile);
        return (
            <div className="App">
                <h2>Import CSV File!</h2>
                <input
                    className="csv-input"
                    type="file"
                    ref={input => {
                        this.filesInput = input;
                    }}
                    name="file"
                    placeholder={null}
                    onChange={this.handleChange}
                />
                <p />
                <button onClick={this.importCSV}> Upload now!</button>
            </div>
        );
    }
}

export default CsvParse;