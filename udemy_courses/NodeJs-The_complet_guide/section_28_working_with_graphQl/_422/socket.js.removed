let io;

// ---------------------------------------------------------------------

const init = (httpServer) => {
    const ioSocket = require('socket.io');
    io = ioSocket(httpServer, {
        cors: {
            origin: '*',
        }
    });
    console.log('io init');
    return io;
};

// ---------------------------------------------------------------------

const getIo = () => {
    if (!io) {
        throw new Error('socket.io not initialized');
    }
    return io;
};

// ---------------------------------------------------------------------

module.exports = {
    init,
    getIo
};