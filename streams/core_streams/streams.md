default buffer size 16384 Bytes it has its own events, properties & methods
it will hold its data in its buffer until its filled and then it will write once.

input / unless filled buffer size
output / only once

Nuances
if data being passed is more than possible fullfilment.
then it will hold the rest of the data in ram , which is memory problem.
but if we want to push more data into it, it will hold the data to the memory leading to more memory issues.

the process of draining event once drained, write another fullfillemnt otherwise memory issues may occur.

TYPES OF STREAMS:
Writable
example
stream.write(data);

Readable
to fill the readable stream use
stream.push(data);

the event to listen to after its filled and ready to read.
stream.on('data', (chunk) => {})

Duplex ( Both R/W )
has 2 internal buffers, 1 for R another for W

Transform ( Like duplex but also can modify the data )
same for transform
