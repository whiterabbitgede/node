// index.js
const http = require('http');

const express = require('express');
const os = require('os');

const app = express();
// const PORT = process.env.PORT || 3000;

const hostname = '0.0.0.0';
const port = 3000;

// Helper to get system info
function getNodeInfo() {
    return {
        nodeVersion: process.version,
        platform: os.platform(),
        architecture: os.arch(),
        uptime: `${os.uptime()} seconds`,
        totalMemory: `${(os.totalmem() / 1e9).toFixed(2)} GB`,
        freeMemory: `${(os.freemem() / 1e9).toFixed(2)} GB`,
        cpuCores: os.cpus().length,
        cpuModel: os.cpus()[0].model
    };
}




// Route to display the info
app.get('/', (req, res) => {
  const nodeInfo = getNodeInfo();
  res.send(`
      <h1>Hello, World!</h1>
      <h1>Node Information</h1>
      <ul>
          <li><strong>Node Version:</strong> ${nodeInfo.nodeVersion}</li>
          <li><strong>Platform:</strong> ${nodeInfo.platform}</li>
          <li><strong>Architecture:</strong> ${nodeInfo.architecture}</li>
          <li><strong>Uptime:</strong> ${nodeInfo.uptime}</li>
          <li><strong>Total Memory:</strong> ${nodeInfo.totalMemory}</li>
          <li><strong>Free Memory:</strong> ${nodeInfo.freeMemory}</li>
          <li><strong>CPU Cores:</strong> ${nodeInfo.cpuCores}</li>
          <li><strong>CPU Model:</strong> ${nodeInfo.cpuModel}</li>
      </ul>
  `);
});

// Route to display the info
app.get('/show-node-info', (req, res) => {
    const nodeInfo = getNodeInfo();
    res.send(`
        <h1>Node Information</h1>
        <ul>
            <li><strong>Node Version:</strong> ${nodeInfo.nodeVersion}</li>
            <li><strong>Platform:</strong> ${nodeInfo.platform}</li>
            <li><strong>Architecture:</strong> ${nodeInfo.architecture}</li>
            <li><strong>Uptime:</strong> ${nodeInfo.uptime}</li>
            <li><strong>Total Memory:</strong> ${nodeInfo.totalMemory}</li>
            <li><strong>Free Memory:</strong> ${nodeInfo.freeMemory}</li>
            <li><strong>CPU Cores:</strong> ${nodeInfo.cpuCores}</li>
            <li><strong>CPU Model:</strong> ${nodeInfo.cpuModel}</li>
        </ul>
    `);
});

// Route to display the info
app.get('/node', (req, res) => {
    const nodeInfo = getNodeInfo();
    res.send(`
        <h1>Node Information</h1>
        <ul>
            <li><strong>Node Version:</strong> ${nodeInfo.nodeVersion}</li>
            <li><strong>Platform:</strong> ${nodeInfo.platform}</li>
            <li><strong>Architecture:</strong> ${nodeInfo.architecture}</li>
            <li><strong>Uptime:</strong> ${nodeInfo.uptime}</li>
            <li><strong>Total Memory:</strong> ${nodeInfo.totalMemory}</li>
            <li><strong>Free Memory:</strong> ${nodeInfo.freeMemory}</li>
            <li><strong>CPU Cores:</strong> ${nodeInfo.cpuCores}</li>
            <li><strong>CPU Model:</strong> ${nodeInfo.cpuModel}</li>
        </ul>
    `);
});

// Start the server
app.listen(port, hostname, () => {
    console.log(`Server running at http://localhost:${port}/show-node-info`);
});
