const getSystemInfo = require('./SystemInfo');
const logData = require('./logger');

console.log('System Monitor Started...');

setInterval(() => {
    const systemInfo = getSystemInfo();
    logData(systemInfo);
}, 5000);
