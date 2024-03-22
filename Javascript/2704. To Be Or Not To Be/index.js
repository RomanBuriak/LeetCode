/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: function toBe(anotherVal){
            if(val===anotherVal){
                return true;
            }else{
                throw new Error("Not Equal");
            }
        },
        notToBe: function notToBe(anotherVal) {
            if(val!==anotherVal){
                return true;
            }else{
                throw new Error("Equal");
            }
        }

    };
};

console.log(expect(5).toBe(5));// true
console.log(expect(5).notToBe(5));// throws "Equal"

