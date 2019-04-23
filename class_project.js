//4/23/19 class projects


//Challenge 1

var list = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];
list.push("fruit loops");
list[4] = "Fair Trade Coffee";
list.splice(2, 2, "rice", "beans")
var cart = [];
cart.push(list.pop());
cart.push(list.shift());

while(list.length > 0){
    cart.push(list.pop());
}

cart.sort().reverse();

console.log(list);
console.log(cart);
console.log("My cart contains: ", cart.join(', '));

//challenge 2 

var course = {
	name: 'JavaScript Applications',
	awesome: true,
	teachers: ['Assaf', 'Shane'],
	students: [
		{
			name: 'Steve',
			computer: {
				OS: 'Linux',
				type: 'laptop'
			}
		},
		{
			name: 'Katy',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		},
		{
			name: 'Chuck',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		}

	],
	preReqs : {
		skills : ['html', 'css', 'git'],
		equipment: {
			laptop: true,
			OSOptions: ['linux', 'osx']
		}
	}
};

//console.log(course.name);
//console.log(course.teachers[1]);
//console.log(course.students[0].name);
//console.log(course.students[1].computer.type);
//console.log(course.preReqs.equipment);
//console.log(course.preReqs.equipment.OSOptions[1]);
//console.log(course.preReqs.equipment.OSOptions[0] + " or " + course.preReqs.equipment.OSOptions[1]);
var students = [];
for (i = 0; i < course.students.length; i++) { 
  if(course.students[i].computer.OS === "OSX"){
    students.push(course.students[i].name)
  }
}
console.log(students)