// Import the compiled WebAssembly module
import { FileProcessor } from 'D:/PCI/Fuxa/latest/FUXA-master/server/runtime/devices/modbusdll/dotnetapp/fileProcessor.wasm';
//const FileProcessor = require('D:/PCI/Fuxa/latest/FUXA-master/server/runtime/devices/modbusdll/dotnetapp/dotnet.wasm');

// Function to initialize the connection
export async function initializeConnection(IPAddr, IPPort, Timeout) {
    return await FileProcessor.Init(IPAddr, IPPort, Timeout);
}

// Function to toggle the connection
export function toggleConnection() {
    return FileProcessor.ToggleConnection();
}

// Function to process a file
export async function processFile(file) {
    return await FileProcessor.ProcessFile(file);
}

// Function to add two numbers
export async function add(a, b) {
    return await FileProcessor.Add(a, b);
}

module.exports = {initializeConnection, toggleConnection, add, processFile }