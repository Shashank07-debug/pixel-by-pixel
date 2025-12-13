const timesToRepeat = 100;
const character = '🐶';
let answer = '';
for (let i = 0; i < timesToRepeat; i++) {
    answer+= character;
}
console.log(answer);
// Alternative using padStart
// console.log("".padStart(timesToRepeat * 2, character));

function AddTwo(number){
    return number + 2;
}

const result = AddTwo(9);
console.log(result);

const meow = () => {
    console.log('Meow!');
}

console.log(meow());


const person1 = {
    name: 'Alice',
    age: '30-45',
    city: 'Wonderland',
    state: 'Fantasy',
};
const property = 'city';
console.log(person1[property]);
console.log(person1);

function suggestMusic(person){
    if(person.age === '30-45'){
        console.log('How about some classic rock?');
    }else if(person.age === '18-29'){
        console.log('How about some pop music?');
    }else{
        console.log('How about some jazz?');
    }
}

suggestMusic(person1);

const person2 = {
    name: 'Bob',
    age: '18-29',
    city: 'Builderland',
    state: 'Construction',
    greet: function(){
        console.log(`Hello, my name is ${this.name} and I live in ${this.city}, ${this.state}.`);
    }
};
console.log(person2.greet());
