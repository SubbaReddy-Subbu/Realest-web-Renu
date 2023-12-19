const userSchemaSchema = require('../MongoDB/Modals/user');
// const router = require('express').Router();

const getAllUsers = async (req,res)=>{
    console.log('All getAllUsers')
    return res.send('getAllUsers')
    // return req.json({mess: 'getAllUsers'})
};
const getUserDetailes = async (req,res)=>{
    console.log('All getUserDetailes');
    return res.send('getAllUsers')
};
const UpdateUpdate = async (req,res)=>{  console.log('All UpdateUpdate')
return res.send('getAllUsers')};
const DeleteUser = async (req,res)=>{  console.log('All DeleteUser')
return res.send('DeleteUser')};
// const getAllPropertys = async (req,res)=>{};

module.exports = {getAllUsers,getUserDetailes,UpdateUpdate,DeleteUser}