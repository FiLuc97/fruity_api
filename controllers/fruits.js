const Fruit = require('../models/Fruits') 

const index = async (req, res) => { //creating first route. Using app to link to express. By putting 'home', it will only show up on the 'Home' page
    try {
    const fruits = await Fruit.showAll()
    res.status(200).send(fruits) //uses status to send a status code.
    } catch (err) {
        res.status(500).send({error: 'Server Error'}) //always use status codes (must be the correct one in your debug)
    }
}

const show = async (req, res) => { //must always have req and res even if you're not using them. 
    const name = req.params.name.toLowerCase() //to get info from the users, rec.params (this will be on the assignment)
    try {
        const fruit = await Fruit.show(name)
        res.status(200).send(fruit)
    } catch (err) {
        res.status(404).send({ error: err }) 
    }
}

const create = async (req, res) => {
    try{ 
        const newFruit = await Fruit.create(req.body)
        res.status(201).send(newFruit)
    } catch (err) {
        res.status(409).send({error: err}) 
    }
}

const update = async (req, res) => {
    const name = req.params.name.toLowerCase()

    try{
        const fruit = await Fruit.show(name)
        const result = await fruit.update(req.body)

        res.status(200).send(result)
    } catch (err) {
        res.status(404).send({ error: err })
    }
}

const destroy = async (req, res) => {
    const name = req.params.name.toLowerCase()

    try {
        const fruit = await Fruit.show(name)
        const result = await fruit.destroy()

        res.sendStatus(204)
    } catch (err) {
        res.status(404).send({ error: err })
    }
}


module.exports = {index, show, create, update, destroy}