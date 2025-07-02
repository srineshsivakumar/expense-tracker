const { Router } = require('express')

const router=require('express').Router()

const {addIncome, getIncomes, deleteIncome} = require('../controllers/income')




router.post('/add-income',addIncome)
    .get('/get-income',getIncomes)
    .delete('/delete-income/:id',deleteIncome)

module.exports=router
