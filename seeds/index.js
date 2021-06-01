const mongoose = require('mongoose');
const cities = require('./cities')
const { places, descriptors } = require('./seedHelpers')
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log("Database Connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for(let i = 0; i < 50; i++){
        const random100 = Math.floor(Math.random()* 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = await new Campground({
            author: '60868f321f3a38368877a66c',
            location: `${cities[random100].city}, ${cities[random100].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: 'https://source.unsplash.com/collection/483251',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis tempore cupiditate deleniti praesentium recusandae accusantium, consequuntur voluptates consectetur laudantium exercitationem enim, amet repellendus omnis quidem expedita libero. Repellat, ullam nobis.',
            price
        })
        await camp.save();
    }
}
seedDB().then( () => {
    mongoose.connection.close();
})