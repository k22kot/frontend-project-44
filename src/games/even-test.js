function greet(fn, name) {
    fn(name);
    console.log()
  }
  
  greet(sayHello, "Иван"); // Привет, Иван!
  
  function sayHello(name) {
    //console.log(`Привет, ${name}!`);
    return `${name} 'Катя'`;
  }
  
  