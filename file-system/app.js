const fs = require("fs/promises");

// open (32) file descriptor ( descriptor is like an ID to the opened file)
// read/write

// BY DEFAULT OUR FS INHERITS FROM EVENT EMMITERS ( WATCH DOCS )


(async () => {
    // commands 
    const CREATE_FILE = 'create a file';
    const DELETE_FILE = 'delete a file';
    const RENAME_FILE = 'rename the file';
    const ADD_TO_FILE = 'add to file';

    const createFile = async (path) => {
        try {
            // we want to check whether or not we already have that file
            const existingFileHandle = await fs.open(path, "r");
            existingFileHandle.close();

            // we already have that file...
            return console.log(`The file ${path} already exists.`);
        } catch (e) {
            // we don't have the file, now we should create it
            const newFileHandle = await fs.open(path, "w");
            console.log("A new file was successfully created.");
            newFileHandle.close();
        }
    };
    
    const deleteFile = async (path) => {
        try {
            await fs.rm(path);
            console.log('REMOVE RESULTS');
        }
        catch (e) 
        {
            
        }
    }

    const renameFile = async (oldPath, newPath) => {
        try {
            const result = await fs.rename(oldPath, newPath);
            console.log('RENAME RESULTS', result);
        }
        catch (e) 
        {
            console.log('SOMETHING WENT WRONG', e);
        }
    }

    const addToFile = async (filePath, content) => {
        try {
            // we want to check whether or not we already have that file
            const existingFileHandle = await fs.open(filePath, "w");
             
            existingFileHandle.write(content, 0, 'utf-8');

            existingFileHandle.close();


            // we already have that file...
            return console.log(`ENTRY ADDED`);
        }
        catch (e) 
        {
        }
    }

    const conditions = (command) => {
        // create a file:
        // create a file <path> 
        if (command.includes(CREATE_FILE)) {
            const filePath = command.substring(CREATE_FILE.length + 1);
            createFile(filePath);
        }
        // delete a file <path> 
        if (command.includes(DELETE_FILE)) {
            const filePath = command.substring(DELETE_FILE.length + 1);
            deleteFile(filePath);
        }
        // rename a file <path> 
        if (command.includes(RENAME_FILE)) {
            const overall = command.split(' ');
            // const oldPath = command.substring(RENAME_FILE.length + 1);
            
            renameFile(overall[3], overall[4]);
        }
        // add to file <path> 
        if (command.includes(ADD_TO_FILE)) {
            const overall = command.split(' ');

            // const filePath = command.substring(ADD_TO_FILE.length + 1);
            
            addToFile(overall[3], overall[4]);
        }
    }

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

            // AS WE FILLED OUR DATA TO BUFFER WE PROVIDED, NO NEED TO SAVE IT TO CONTENT VAR
            // WE CAN PRINT DIRECTLY THE BUFFER VALUE DECODED
            console.log(buffer.toString('utf-8'));
        
            const command = buffer.toString('utf-8');

            conditions(command);
    })

    // watching whole directory, can change to commands.txt only
    const watcher = fs.watch('./');

    for await (const event of watcher) {
        if (event.eventType === "change" && event.filename === "commands.txt") {
            commandFileHandler.emit('change');
        }
    }
})();