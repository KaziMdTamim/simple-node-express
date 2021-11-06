const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello from node, I Am Exited learning node');
});


const users =[
    {id:1, name:"Nishat", email: "TamimandNishat@gmail.com", Phone: '01302396050'},
    {id:2, name:"Tamim", email: "TamimandNishat@gmail.com", Phone: '01317480627'},
    {id:3, name:"Hablu", email: "Amihablu@gmail.com", Phone: '01956565233'},
    {id:4, name:"Bablu", email: "Amibablu@gmail.com", Phone: '01845652585'},
    {id:5, name:"Choiti", email: "cielwu@gmail.com", Phone: '01302596945'}
]

app.get('/users', (req, res) =>{
    const search =req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users)
    }
})


app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log("Hitting The Post", req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})


app.get('/users/:id', (req, res) =>{
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruits/mangoes/Rupali', (req, res) => {
    res.send('Yummy Its great')
})

app.listen(port, () => {
    console.log('listening from', port);
})