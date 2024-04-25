type Session = { id: string, timestamp: number }
export const sessionMap = new Map<string, Session>()

function waitMillisAsync(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function winstonLogAsync(message: string) {
    await waitMillisAsync(1000)
    console.log(message)
}

let sessionscreated = 1;

export async function getFirstSessionTimestampAsync(id: string) {
    const currentSession = sessionMap.get(id)
    await winstonLogAsync(`${id}: sync: !!currentSession: ${!!currentSession}`)
    if (!currentSession) {
        const newSession = {id, timestamp: performance.now()}
        sessionMap.set(id, newSession)
    }
    return sessionMap.get(id)!.timestamp
}
