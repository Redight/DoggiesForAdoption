const db = require("../data/dbConfig.js");
module.exports={
    find,
    findById
}

async function find() {
    const dogs = await db("dogs")
    var fullDogs = []
    for(i = 0; i <dogs.length; i++){
        const dogs = await findById(dogs[i].id)
        fullsDogs.push(dog)
    }
    return fullDogs;
}

async function findById() {
    const dog = await db("dogs").where({id}.first());
    const breedID = await db("dog_breeds").innerJoin('dogs', 'dogs.id', 'dogs_breeds.dog_id').where({"dog_id": dog.id})
    const breeds = await Promise.all( breedID.map(async(breed) => {
        try {
            const name = await findBreed(breed.breed_id)
            return name[0].name
        }
        catch (error) {
            console.log(error)
        }
    })
    )
    return {...dog, breeds}
}

function findBreed(id) {
    return db("breeds").where({id})
}