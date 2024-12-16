
function waitingTime(waitingTimes, serialNumber) {

    const len = waitingTimes.length;
    if (Array.isArray(waitingTimes) !== true || typeof (serialNumber) !== "number" || serialNumber <= len) {
        return "Invalid Input";
    }
    else {
        let total = 0;
        for (const time of waitingTimes) {
            total += time;
        }
        const avg = Math.round(total / len);
        const leftMembers = serialNumber - 1 - len;
        const avgWaitingTime = avg * leftMembers;
        return avgWaitingTime;
    }
}

const output = waitingTime([13, 2], 6);
console.log(output);