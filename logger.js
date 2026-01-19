const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, 'system-log.txt');

function logData(data) {
    const logEntry = `
Time: ${data.timestamp}
Platform: ${data.platform}
CPU Cores: ${data.cpuCount}
Free Memory: ${data.freeMemory}
Total Memory: ${data.totalMemory}
-------------------------------
`;

    fs.appendFile(logFilePath, logEntry, (err) => {
        if (err) {
            console.error('Error writing log:', err);
        }
    });
}

module.exports = logData;
