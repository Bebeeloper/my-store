const username : string = 'bebéloper';

const sum = (a : number, b : number) => {
  return a + b;
}

sum(12,12);

class Person {

  constructor(
    public age : number,
    public name : string,
    public lastname : string
  ){}

  kevind = new Person(28, 'Kevind', 'Ospina');
}
