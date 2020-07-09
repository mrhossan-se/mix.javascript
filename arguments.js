const user = {id: 200, name: "Hossan", age: -20};
//oup put
{"id":200,"name":"Hossan","age":-20}

const userJSON = JSON.stringify(user);
console.log(userJSON);
const userFromJSON = JSON.parse(userJSON);
console.log(userFromJSON);

const user ={
   id: 245,
   name: "Hossan",
   lover: {
           name: "Nice face",
           favFood: "pizza",
           },
   friendAge: [12, 45, 95, +1],
   friendsName: ["rocket", "cold fire", "hot moon", "soft stone"]
};
//data export to server
const userJSON = JSON.stringify(user);
console.log(userJSON);

//data import from server
const userFromJSON = JSON.parse(userJSON);
console.log(userFromJSON);


//out put
{"id":245,"name":"Hossan","lover":{"name":"Nice face","favFood":"pizza"},"friendAge":[12,45,95,1],"friendsName":["rocket","cold fire","hot moon","soft stone"]}
{
  id: 245,
  name: 'Hossan',
  lover: { name: 'Nice face', favFood: 'pizza' },
  friendAge: [ 12, 45, 95, 1 ],
  friendsName: [ 'rocket', 'cold fire', 'hot moon', 'soft stone' ]
}

