const express = require("express");
const app = express();

const { faker } = require('@faker-js/faker');

//CREAMOS 2 CLASES
class Usuario {
    constructor(){
        this.id = faker.random.number();
        this.first_name = faker.name.firstName();
        this.last_name = faker.name.lastName();
        this.telephone_number = faker.phone.phoneNumber('+51 ### ## ##');
        this.email = faker.internet.email();
        this.password = faker.internet.password()
    }
}

class Compañia {
    constructor(){
        this.id = faker.random.number();
        this.company = faker.company.companyName();
        this.address= ["Str. "+faker.address.streetAddress(),
            "City "+faker.address.city(),"State. "+faker.address.state(),
            "ZIP: "+faker.address.zipCode(),
            "Country: "+faker.address.country()];
    }
}

// console.log(new Compañia());

app.get("/api/users/new", (request, response) => {
    // console.log(request)
    return response.status(200).json( new Usuario() );
});

app.get("/api/companies/new", (request, response) => {
    // console.log(request)
    return response.status(200).json( new Compañia() );
});

app.get("/api/user/company", (request, response) => {
    // console.log(request)
    return response.status(200).json( {"Company" : new Compañia(), "User" : new Usuario()} );
});



const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
