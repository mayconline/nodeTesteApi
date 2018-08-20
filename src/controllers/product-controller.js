'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.post = (req, res, next) => {

    var product = new Product(req.body);
    product.save()
        .then(x=>{

            res.status(201).send({message:'Produto cadastrado'})

        }).catch(e=>{
            res.status(400).send({message:'Erro ao cadastrar', data:e})
        })
   
}

exports.put = (req, res, next) => {
   
    Product.findByIdAndUpdate(req.params.id,{

        $set:{
            title:req.body.title,
            description:req.body.description,
            price:req.body.price,
            slug:req.body.slug
        }
    })
        .then(x=>{
            res.status(200).send({
                message:'Produto Atualizado'
            })
          
        })
        .catch(e=>{
            res.status(400).send({
                message:'erro ao atualizar produto',
                data:e
            })
        })
}

exports.delete = (req, res, next) => {
    Product.findOneAndRemove(req.body.id)
        .then(x=>{
            res.status(200).send({
                message:'Produto Removido'
            })
          
        })
        .catch(e=>{
            res.status(400).send({
                message:'erro ao remover produto',
                data:e
            })
        })
}


exports.get = (req, res, next) => {

  Product.find({
      active:true  //filtro por campos
  }, 'title price slug tags' /*retornar somente os campos que precisa */)

    .then(data=>{

    res.status(200).send(data)

    }).catch(e=>{
         res.status(400).send({e})
    })
}

exports.getBySlug = (req, res, next) => {

    Product.findOne({
        slug: req.params.slug, //filtro por variavel
        active:true  //filtro por campos
    }, 'title description price slug tags' /*retornar somente os campos que precisa */)
  
      .then(data=>{
  
      res.status(200).send(data)
  
      }).catch(e=>{
           res.status(400).send({e})
      })
  }

  exports.getById = (req, res, next) => {

    Product.findById(req.params.id)
  
      .then(data=>{
  
      res.status(200).send(data)
  
      }).catch(e=>{
           res.status(400).send({e})
      })
  }

  exports.getByTag= (req, res, next) => {

    Product.find({
       tags: req.params.tags, //filtro por variavel
        active:true  //filtro por campos
    }, 'title description price slug tags' /*retornar somente os campos que precisa */)
  
      .then(data=>{
  
      res.status(200).send(data)
  
      }).catch(e=>{
           res.status(400).send({e})
      })
  }