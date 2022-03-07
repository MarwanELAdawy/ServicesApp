const express = require('express');
const AdminBro = require('admin-bro');
const mongooseAdminBro = require('@admin-bro/mongoose');
const expressAdminBro = require('@admin-bro/express');

const app = express();

app.get('/', (req, res)=>res.send('Hello World'));

// Database
const connection = require('./config/db');
connection.once('open', ()=>console.log('Database connected Successfully'));
connection.on('error',(err)=>console.log('Error', err));

//Admin Bro and Models
const Customer = require('./models/Customer');
const Admin = require('./models/Admin');
const Service = require('./models/Service');

AdminBro.registerAdapter(mongooseAdminBro);

const AdminBroOptions = {
    resources: [Admin, Customer, Service],
    databases: [],
    rootPath: '/admin',
};

const adminBro = new AdminBro(AdminBroOptions);
const router = expressAdminBro.buildRouter(adminBro);

app.use(adminBro.options.rootPath, router);
app.listen(3000, ()=>console.log('AdminJS is under localhost:3000/admin'));