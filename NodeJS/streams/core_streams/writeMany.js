const fs = require("fs/promises");

// without streams
// (async () => {

//     const data = await fs.open('./text.txt', 'w');

//     const executor = async (i) => {

//         await data.write(` ${i} `);

//     }

//     for ( let i = 0 ; i < 1000000 ; i++)
//         {
//             console.log('asdf');
//             executor(i);
//         }

// })()

// NOT A GOOD PRACTISE THO.
// HIGH MEMORY USAGE, HIGH TRANSFER SPEED
// with streams
(async () => {
	const fileHandle = await fs.open("./text.txt", "w");

	const stream = fileHandle.createWriteStream();

	for (let i = 0; i < 1000000; i++) {
		const bufferSpace = Buffer.from(i.toString(), "utf-8");
		stream.write(bufferSpace);
	}
})();
