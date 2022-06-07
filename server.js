const express = require('express')
const app = express()
const cors = require('cors')
PORT = 8000

app.use(cors())

const flavors={
    'original': {
        'red': "Strawberry",
        "yellow" : "Lemon",
        'orange' : 'Orange',
        'purple' : 'Grape',
        'green' : 'Lime'
    },
    'wild berry': {
        'green': 'Mellon Berry',
        'blue': 'Raspberry',
        'red': 'Wild Cherry',
        'purple': 'Berry Punch',
        'pink': 'Strawberry'
    },
    'brightside': {
        'orange': 'Tangerine',
        'pink': 'Pink Lemonade',
        'yellow': 'Kiwi Banana',
        'green': 'Watermelon',
        'blue': 'Paradise Punch'
    },
    'smoothie': {
        'purple': 'Blueberry Smoothie',
        'red': 'Raspberry Smoothie',
        'yellow': 'Peach Guava Smoothie',
        'pink': 'Strawberry Banana Smoothie',
        'peach': 'Mango Smoothie',
    },
    'tropical': {
        'orange': 'Mango Tangelo',
        'yellow': 'Banana Berry',
        'blue': 'Pinapple Passionfruit',
        'pink': 'Strawberry Starfruit',
        'green': 'Kiwi Lime',
    },
    'unknown': {
        'unknown':'unknown',
    }
}

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.get('/api/:name',(req, res)=>{
    const skittlesFlavor = req.params.name.toLowerCase()
    if (flavors[skittlesFlavor]){
        res.json(flavors[skittlesFlavor])
    } else {
        res.json(flavors['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! Betta go catch it!`)
})