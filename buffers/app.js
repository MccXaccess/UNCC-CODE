const { Buffer } = require('buffer');

const memoryContainer = Buffer.alloc(4); // 4 bytes - 32 bits

// modifying certain hex value ( 1 byte ) printed as decimal
memoryContainer[0] = 0xF4;
memoryContainer[1] = 0xFF;

// but what if we want to save negative values without doing the following?
// it is valid, but in the output looks very strange
memoryContainer[2] = -34;

// first arg is to what write, secnd where to write ( buffer allocated byte )
memoryContainer.writeInt8(-34, 3);

// accessing whole memory
console.log(memoryContainer);

// accessing certain hex value
console.log(memoryContainer[0]);
console.log(memoryContainer[1]);
console.log(memoryContainer[2]);
// to read the function used to write the negative decimals we use readInt8 same as writeInt8 
// NOW COMPARE BOTH 2 & 3 INDEXES OF A BUFFER OUTPUTS
// READINT8 because we are using 8 bit system
// IMPORTANT : LEARN HOW NUMBERS ARE STORED IN COMPUTERS
console.log(memoryContainer.readInt8(3));

console.log(JSON.stringify(memoryContainer));

const testObj = {
    man: "human",
    age: {
        nestedProperty1: 'nestedValue1',
        nestedProperty2: 'nestedValue2'
    }
}

console.log(testObj);

const anotherMemory = Buffer.alloc(3);
// also good way but, we are getting wrong view results but not the concept. u know why?
// cuz we are using base-2 which is different in implementation of calculation than base-16
anotherMemory[0] = 0b01001000;
anotherMemory[1] = 0b01101001;
anotherMemory[2] = 0b00100001;
console.log(anotherMemory.toString('utf16le'));

// IMPORTANT. LOOK OUT TO DOCUMENTATION OF BUFFER.
// ENCODING
const buff = Buffer.from("Hi!", "utf-8");
console.log(buff);
console.log(buff.toString());

// https://symbl.cc
//DECODING
// using template hex value of a symbol
const buff2 = Buffer.from("E0A49B", "hex");
console.log(buff2.toString("utf-8"));

const bufferUnsafe = Buffer.allocUnsafe(1000);
console.log(bufferUnsafe.toString('utf-8'));