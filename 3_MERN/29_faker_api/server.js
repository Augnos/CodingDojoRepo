// import express
const express = require("express");
const app = express();
const port = 8000;

const { faker } = require('@faker-js/faker');


// req is short for request
// res is short for response
app.get("/api", (req, res) => {
    res.send("Our express api server is now sending this over to the browser");
});

app.get("/api/users/new", (req, res) => {
    res.send(new User());
})

app.get("/api/companies/new", (req, res) => {
    res.send(new Company());
})

app.get("/api/user/company", (req, res) => {
    res.send({user: new User(), company: new Company()});
})


const server = app.listen(port, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);


class User {
    constructor(){
        this.password = faker.internet.password();
        this.email = faker.internet.email();
        this.phoneNumber = faker.phone.number();
        this.lastName = faker.name.lastName();
        this.firstName = faker.name.firstName();
        this._id = faker.database.mongodbObjectId();
    }
}

class Company {
    constructor(){
        this._id = faker.database.mongodbObjectId();
        this.name = faker.company.name();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCodeByState(),
            country: faker.address.country(),
        }
    }
}

// newUser = new User()
console.log(new User());
console.log(new Company());