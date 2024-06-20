// EXPLANATION
// Queue - FIFO Data Structure, First-In First-Out,
// collection designed for holding elements prior to processing linear data structure
// to add    = push('ELEMENT') to add to the top 
// to remove = pop(0) to remove from the first ( oldest/first element )
// uses      = Keyboard Buffer ( letters should appear on the screen in the order they've been pressed )
//             Waiting Line ( people waiting for orders should be served in the order of who is the first to the last in the order )
//             Many more

/* =-=-=-=-=-=-=-=-=-=-= */
var queue = [];

// To add an item to the queue.
queue.push('Queue Element 1');
queue.push('Queue Element 2');
queue.push('Queue Element 3');

// To remove an item from the queue.
queue.shift();

console.log(queue.includes('Queue Element 2'));

console.log(queue);