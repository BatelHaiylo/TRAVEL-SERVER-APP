const airlines= require('../models/airlines-db')

const getAllData=(req,res)=>{
    res.send({message:'success',airlines})
}

const getDataByName=(req,res)=>{
    const itemIndex = getItemIndexByName(req,airlines)
    res.send({message:'success', output: airlines[itemIndex]})
}

const addNewCompany = (req,res) => {
    airlines.push(req.body.company)
    res.send({message:'success', airlines})
}

const deleteACompany = (req,res) => {
    const itemIndex = getItemIndexById(req,airlines)
    if(itemIndex>-1){
        airlines.splice(itemIndex,1)
        res.send({message:'success',airlines})
    }
    res.send({message:'item not found'})
}

const getDataByCountry=(req,res)=>{
    const itemIndex = getItemIndexByCountry(req,airlines)
    res.send({message:'success', output: airlines[itemIndex]})
}

module.exports = {getAllData, getDataByName, addNewCompany, deleteACompany,getDataByCountry}

const getItemIndexByName = (req,arr) =>{
    const wanntedItem = arr.find(item => item.companyName == req.params.companyName)
    return arr.indexOf(wanntedItem)
}
const getItemIndexByCountry = (req,arr) =>{
    const wanntedItem = arr.find(item => item.OriginCountry == req.params.OriginCountry)
    return arr.indexOf(wanntedItem)
}
const getItemIndexById = (req,arr) =>{
    const wanntedItem = arr.find(item => item.id == req.params.id)
    return arr.indexOf(wanntedItem)
}