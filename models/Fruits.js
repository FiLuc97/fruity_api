const fruits = require('../fruits.json') //importing the fruits.json file. This is a json file that contains an array of fruits.

class Fruit {
    constructor(fruit) { //constructor function that takes a fruit object as an argument and assigns its properties to the instance of the class.
        this.genus = fruit.genus
        this.name = fruit.name
        this.id = fruit.id
        this.family = fruit.family
        this.order = fruit.order
        this.nutritions = fruit.nutritions
           }

        static showAll() {
            return fruits.map(q => new Fruit(q)) 
        }

        static show(name) {
            const fruit = fruits.find((fruit) => fruit.name.toLowerCase() == name)

            if (fruit) {
                return new Fruit(fruit) 
            } else {
                throw 'The fruit does not exist' 
            }
        }

        static create(data) {
            const newFruit = data
            console.log(newFruit)

            newFruit['id'] = fruits.length + 1 //this will add a new id to the fruit. The id will be the length of the array + 1
        
            fruits.push(newFruit) //this will add the new fruit to the array.

            return new Fruit(newFruit) //this will return the new fruit.
        }

        update(data) {
            const updateFruit = fruits.find(fruit => fruit.name.toLowerCase() == this.name.toLowerCase())
            
            if (updateFruit) {
                updateFruit.name = data.name
                updateFruit.family = data.family

                return new Fruit(updateFruit) 
            } else {
                throw 'Fruit not found' 
            }
        }

        destroy () {
            const deletedFruit = fruits.find(fruit => fruit.name.toLowerCase() == this.name.toLowerCase())
            
            if(deletedFruit) {
                const index = fruits.indexOf(deletedFruit)

                fruits.splice(index, 1) //this will remove the fruit from the array
            } else {
                throw 'Fruit not found' 
            }
        } 
    }

module.exports = Fruit;