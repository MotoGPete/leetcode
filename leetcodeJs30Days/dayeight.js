/**
 * @param {Function} fn
 * @return {Function}
 */

/**Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.
  */


var once = function(fn) {
    let bool = false
    return function(...args){
        
        if(!bool){
            bool =true;
            return fn.apply(this, args);
        }else{
            return undefined
        }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */