let people = [
  { name: 'Jhon', age: 23 },
  { name: 'Angela', age:34 },
  { name: 'Michael', age: 34},
  { name: 'Creed', age: 54},
  { name: 'Jim', age: 23 },
];

function groupByAge(people) {

  let groups = {};

  people.forEach((person) => {
    
    if(groups[person.age]) {
      groups[person.age].push(person);
    } else {
      groups[person.age] = [person];
    }
  });

  return groups;
}

console.log(groupByAge(people));