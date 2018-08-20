'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

    title:{
        type:String,
        required:[true,' Digite um Titulo'],
        trim:true
    },
    slug:{
        type:String,
        required:[true,'digite um slug'],
        trim:true,
        index:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    tags:[{
        type:String,
        require:true
    }],
    active:{
        type:Boolean,
        required:true,
        default:true
    }
   

});

module.exports = mongoose.model('Product', schema); 