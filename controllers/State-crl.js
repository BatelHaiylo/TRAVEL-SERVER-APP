const StatesDB = require('../models/satates-db')

const getAllStates = (req,res) => {
    res.send({message:'success', StatesDB})
}

const addNewState = (req,res) => {
    StatesDB.push(req.body.state)
    res.send({message:'success', StatesDB})
}

const updateState = (req,res) => {
    const itemIndex = getItemIndex(req,StatesDB)
    if(itemIndex>-1){
        StatesDB[itemIndex]  = req.body.state
        res.send({message:"success", StatesDB})
    }
    res.send({message:"item was not found"})
}

const deleteState = (req,res) => {
    const itemIndex = getItemIndex(req,StatesDB)
    if(itemIndex>-1){
        StatesDB.splice(itemIndex,1)
        res.send({message:"success", StatesDB})
    }
    res.send({message:"item was not found"})
}

const getItemById = (req,res) => {
    const itemIndex = getItemIndex(req,StatesDB)
    if(itemIndex>-1){
        res.send({message:'success', output:StatesDB[itemIndex]})
    } 
    res.send({message:"item was not found"})

}



module.exports = { getAllStates, addNewState, updateState, deleteState, getItemById}

const getItemIndex = (req,arr) =>{
    const wanntedItem = arr.find(item => item.id == req.params.id)
    return arr.indexOf(wanntedItem)
}