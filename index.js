const Person = require('./person.js');

const person = new Person('John Doe', 42);

const Logger = require('./logger');

person.greeting();

const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener: ', data));

logger.log('Hello world');