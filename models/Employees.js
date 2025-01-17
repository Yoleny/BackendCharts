const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Employees = sequelize.define('employees', {
    EMPLOYEE_ID: {
        type: DataTypes.STRING,
        autoIncrement: true,
        primaryKey: true
    },
    FIRST_NAME: {
        type: DataTypes.STRING,
    },
    LAST_NAME: {
        type: DataTypes.STRING,
    },
    EMAIL: {
        type: DataTypes.STRING,
    },
    PHONE_NUMBER: {
        type: DataTypes.STRING,
    },
    HIRE_DATE: {
        type: DataTypes.STRING,
    },
    JOB_ID: {
        type: DataTypes.STRING,
    },
    SALARY: {
        type: DataTypes.STRING,
    },
    COMMISSION_PCT: {
        type: DataTypes.STRING,
    },
    MANAGER_ID: {
        type: DataTypes.STRING,
    },
    DEPARTMENT_ID: {
        type: DataTypes.STRING,
    }
},
    {
        tableName: 'employees',
        timestamps: false
    }
)
module.exports= Employees;