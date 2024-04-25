type Session = { id: string, timestamp: number }
export const sessionMap = new Map<string, Session>()

function waitForMillisSync(waitTime: number) {
    const startMillis = performance.now();
    while (performance.now() < startMillis + waitTime) {
        // do nothing, try again
    }
}

function winstonLog(message: string) {
    waitForMillisSync(1000)
    console.log(message)
}

let sessionscreated = 0;

export function getFirstSessionTimestamp(id: string) {
    const currentSession = sessionMap.get(id)
    winstonLog(`${id}: sync: !!currentSession: ${!!currentSession}`)
    if (!currentSession) {
        const newSession = {id, timestamp: performance.now()}
        sessionMap.set(id, newSession)
    }
    return sessionMap.get(id)!.timestamp
}