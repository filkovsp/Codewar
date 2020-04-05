// https://www.codewars.com/kata/5838b5eb1adeb6b7220000f5/train/javascript

function idBestUsers() {
    
    let args = [...arguments];
    let result = Array();

    /**
     * 1) get all unique elements from only 1st supplied array and then count them over the all supplied arrays
     *    hint here:https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
     */    
    if (args.length > 1) {
        let clients = args[0].filter((element, index, self) => {return self.indexOf(element) === index;});
        for (const client of clients) {
            if (args.slice(1).every(el => (el.indexOf(client) > -1 )))  {
                let orders = Array();
                // args.map((el, index) => (orders[index] = el.filter(x => x == client).length));
                args.map(el => (orders.push(el.filter(x => x == client).length)));
                
                let ordersCount = 0;
                for (const n of orders) {ordersCount += n;}
                
                result.push( Array(ordersCount, client) );
            }
        }
    } else {
        return [];
    }
    

    if (result.length > 0) {
        /**
         * 2. transform and return result
         * TODO: get rid of reduce --> it's greedy for resources 
         */
        return result.sort((a,b) => b[0] - a[0]).slice(1).reduce(function(accumulator, current) {
            if (current[0] == accumulator.slice(-1)[0][0]) {
                accumulator.slice(-1)[0][1] = Array(current[1]).concat(accumulator.slice(-1)[0][1]).sort();
                return accumulator;
            } else {
                accumulator.push( Array(current[0], Array(current[1])) );
                return accumulator;
            }
        }, Array(Array(result[0][0], Array(result[0][1]))) );

    } else {
        return [] 
    }
}

var z = null;
var a1, a2, a3, a4;

a1 = ['A042', 'B004', 'A025', 'A042', 'C025'];
a2 = ['B009', 'B040', 'B004', 'A042', 'A025', 'A042'];
a3 = ['A042', 'A025', 'B004'];
z = idBestUsers(a1, a2, a3)
console.log(z);
// expected: [[5, ['A042']], [3, ['A025', 'B004']]]

a1 = ['A043', 'B004', 'A025', 'A042', 'C025'];
a2 = ['B009', 'B040', 'B003', 'A042', 'A027', 'A044'];
a3 = ['A041', 'A026', 'B005'];
z = idBestUsers(a1, a2, a3)
console.log(z);
// expected: []

a1 = ['A042', 'B004', 'A025', 'A042', 'C025'];
a2 = ['B009', 'B040', 'B004', 'A042', 'A025', 'A042'];
a3 = ['A042', 'B004', 'A025', 'A042', 'C025', 'B009', 'B040', 'B004', 'A042', 'A025', 'A042'];
a4 = ['A042', 'A025', 'B004'];
z = idBestUsers(a1, a2, a3, a4)
console.log(z);
// expected: [[9, ['A042']], [5, ['A025', 'B004']]]
