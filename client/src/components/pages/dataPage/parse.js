import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import csv from 'csv';

export default class Parse extends Component {
    onDrop(files) {
        this.setState(files)

        let file = files[0]

        const reader = new FileReader()
        reader.onload = () => {
            csv.parse(reader.result, (err, data) => {
                
                let userList = []

                for (var i = 0; i < data.length; i++) {
                    const name = data[i][0];
                    const phoneNumber = data[i][1];
                    const address = data[i][2];
                    const classType = data[i][3];
                    const newUser = { "name": name, "phoneNumber": phoneNumber, "address": address, "class": classType };
                    userList.push(newUser);

                    fetch('https://localhost:3001/api/uploadfile', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(newUser)
                    })
                };
            });
        };

        reader.readAsBinaryString(file);
    }

    render() {

        const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };
        const fontSize = 5;

        return (
            <div align="center" oncontextmenu="return false">
                <br /><br /><br />
                <div className="dropzone">
                    <Dropzone accept=".csv" onDropAccepted={this.onDrop.bind(this)}>
                    </Dropzone>
                    <br /><br /><br />
                </div>
                <h2>Upload or drop your <font size={fontSize} color="#00A4FF">CSV</font><br /> file here.</h2>
            </div>
        )
    }
}