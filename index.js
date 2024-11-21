const express = require('express');
const Employees = require('./models/Employees')
const Products = require('./models/Products');
const sequelize= require('./config/db');

const app= express();
app.use(express.json());
var port = 5000;

//select valueCurrency, avg(value) from producto group by valueCurrency
app.get('/totalvalueCurrency', async(req,resp) =>{

    try {
        const result = await Products.findAll({
            attributes:[
                'valueCurrency',
                [sequelize.fn('avg', sequelize.col('value')), 'Total']
            ],
            group: ["valueCurrency"]
        });

        resp.json(result);
    } catch (error) {
        resp.status(500).json({error: 'Ocurrio un error' + error});
    }
});





//  select productType, SUM(value) from producto group by productType;
app.get('/totalProductType', async(req,resp) =>{

    try {
        const result = await Products.findAll({
            attributes:[
                'productType',
                [sequelize.fn('SUM', sequelize.col('value')), 'Total']
            ],
            group: ["productType"]
        });

        resp.json(result);
    } catch (error) {
        resp.status(500).json({error: 'Ocurrio un error' + error});
    }
});


// select brandCode, sum(value) from producto group by brandCode;
app.get('/totalBybrandCode', async(req,resp) =>{

    try {
        const result = await Products.findAll({
            attributes:[
                'brandCode',
                [sequelize.fn('SUM', sequelize.col('value')), 'Total']
            ],
            group: ["brandCode"]
        });

        resp.json(result);
    } catch (error) {
        resp.status(500).json({error: 'Ocurrio un error' + error});
    }
});

app.listen(port, ()=>{
    console.log('Servicio ejecutandose en :' , port)
})