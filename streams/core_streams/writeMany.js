// const fs = require("node:fs/promises");

// Execution Time: 8s
// CPU Usage: 100% (one core)
// Memory Usage: 50MB
// (async () => {
//   console.time("writeMany");
//   const fileHandle = await fs.open("test.txt", "w");

//   for (let i = 0; i < 1000000; i++) {
//     await fileHandle.write(` ${i} `);
//   }
//   console.timeEnd("writeMany");
// })();

// Execution Time: 1.8s
// CPU Usage: 100% (one core)
// Memory Usage: 50MB
// const fs = require("node:fs");

// (async () => {
//   console.time("writeMany");
//   fs.open("test.txt", "w", (err, fd) => {
//     for (let i = 0; i < 1000000; i++) {
//       const buff = Buffer.from(` ${i} `, "utf-8");
//       fs.writeSync(fd, buff);
//     }

//     console.timeEnd("writeMany");
//   });
// })();

const fs = require("node:fs/promises");

// DON'T DO IT THIS WAY!!!!
// Execution Time: 270ms
// CPU Usage: 100% (one core)
// Memory Usage: 200MB
(async () => {
  console.time("writeMany");
  const fileHandle = await fs.open("test.txt", "w");

  const stream = fileHandle.createWriteStream();

  console.log(stream.writableHighWaterMark);

  // if we do one byte less it will be true
  const buff = Buffer.alloc(16383, '111');

  console.log(buff);

  // checking whether our stream buffer is full
  console.log(stream.write(buff));
  // false as it is directly hitting the 16384 threshold
  console.log(stream.write(buff));

  // once the stream is filled with data.
  stream.on('drain', () => {
    console.log('emptied stream');
  })

  // console.log(stream.writableLength);

  // const buff = Buffer.from('string');

  // stream.write(buff);

  // console.log(buff);

  // console.log(stream.writableLength);

  // for (let i = 0; i < 1000000; i++) {
  //   const buff = Buffer.from(` ${i} `, "utf-8");
  //   stream.write(buff);
  // }
  console.timeEnd("writeMany");
  // fileHandle.close(); 

})();
