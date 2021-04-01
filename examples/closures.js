function sayHello(name) {
    const otherName = 'Other ' + name
    const greeting = function(message) {
      return `${message} ${name}?`;
    }
    const goodbye = function(message) {
        return `Goodbye ${name}, ${message}`;
      }
    return {
        greeting: greeting, 
        goodbye: goodbye
    };
  }
  
  let hiYasmine = sayHello("Yasmine");
  console.log(hiYasmine.greeting('How are you'));
  console.log(hiYasmine.goodbye("It was nice to meet you"))
//   let hiAdam = sayHello("Adam");
//   console.log(hiAdam("How are you"));
  
  
//   console.log(hiYasmine("How are you"));
  
//   let hiDavid = sayHello("David");
//   console.log(hiDavid("Hello, How are you"));