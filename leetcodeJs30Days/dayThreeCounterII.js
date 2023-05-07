/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

 /**Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
 

  */

class Counter {
    constructor(init) {
        this.init = init;
        this.blah = init;
    }

    increment() {
    this.blah += 1;
     return this.blah;

}
    decrement() {
    this.blah -= 1;
      return this.blah;
    
}
    reset()  {
    
      this.blah = this.init
return this.blah;
    
    }
}

var createCounter = function(init) {
    return new Counter(init);
};

/**
* const counter = createCounter(5)
* counter.increment(); // 6
* counter.reset(); // 5
* counter.decrement(); // 4
*/