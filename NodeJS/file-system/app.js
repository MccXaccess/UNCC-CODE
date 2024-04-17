const fs = require("fs/promises");

// open (32) file descriptor ( descriptor is like an ID to the opened file)
// read/write

// BY DEFAULT OUR FS INHERITS FROM EVENT EMMITERS ( WATCH DOCS )


(async () => {
    // cuz it returns a promise we use await.
    const commandFileHandler = await fs.open('./commands.txt', 'r');

    commandFileHandler.on('change', async () => {
    
            // Taking only necessary allocated space to avoid memory leaks.
            const size = (await commandFileHandler.stat()).size;

            const buffer = Buffer.alloc(size);
            const offset = 0;
            const length = buffer.byteLength;
            const position = 0;

            // getting the content only with allocated bytes ( in size amount bytes )
            const content = await commandFileHandler.read(buffer, offset, length, position);

            // returns a Buffer, huge buffer allocated, otherwise
            console.log(content);
        
    })

    // watching whole directory, can change to commands.txt only
    const watcher = fs.watch('./');

    for await (const event of watcher) {
        if (event.eventType === "change" && event.filename === "commands.txt") {
            commandFileHandler.emit('change');
        }
    }
})();