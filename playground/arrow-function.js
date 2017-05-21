const square = x => x * x;

console.log(square(9));

const user = {
  name: 'chong',
  sayHi : () => {
    console.log(arguments);
    console.log(`${this.name} hi`);
  },
  sayHi2(){
    console.log(arguments);
    console.log(`${this.name} hi`);
  }
}

user.sayHi(1,2,3);
