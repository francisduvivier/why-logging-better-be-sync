import express from 'express'
import {getFirstSessionTimestamp, sessionMap as syncSessionMap} from './server-with-sync-logs';
import {getFirstSessionTimestampAsync, sessionMap as asyncSessionMap} from "./server-with-async-logs";

const app = express();
const port = 3000; // You can change the port number

app.get('/first-connection-timestamp', (req , res) => {
    const { id } = req.query; // Extract session ID from query parameters
    const timestamp = getFirstSessionTimestamp(id as string);
    res.json(timestamp);
});

app.get('/first-connection-timestamp-async', async (req , res) => {
    const { id } = req.query; // Extract session ID from query parameters
    const timestamp = await getFirstSessionTimestampAsync(id as string);
    res.json(timestamp);
});

app.delete('/sessions/all', async (req , res) => {
    const { id } = req.query; // Extract session ID from query parameters
    syncSessionMap.clear();
    asyncSessionMap.clear();
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
