import {uuid} from "uuidv4";

const endpoint = 'http://localhost:3000/first-connection-timestamp';

export async function go() {
    const id = uuid()

    for (let i = 0; i < 3; i++) {
        fetch(endpoint + '?id=' + id).then(r => r.json()).then(console.log)
    }
}

go()