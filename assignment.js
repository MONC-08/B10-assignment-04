function calculateTax(income, expenses) {

    if (income < 0 || expenses < 0 || expenses > income) {
        return "Invalid Input";
    }
    else {
        const left = income - expenses;
        const tax = left * (20 / 100);
        return tax;
    }
}

function sendNotification(email) {
    if (!email.includes("@")) {
        return "Invalid Email";
    }

    const strToArray = email.split("@");
    const username = strToArray[0];
    const domainName = strToArray[1];

    return `${username} sent you an email from ${domainName}`;
}

function checkDigitsInName(name) {

    if (typeof (name) !== "string") {
        return "Invalid Input"
    }
    const strToArray = name.split("")
    for (const idx of strToArray) {
        if (idx >= '0' && idx <= '9') {
            return true;
        }
    }
    return false;
}

function calculateFinalScore(obj) {
    if (typeof (obj) !== "object") {
        return "Invalid Input";
    }
    const parentProfession = 20;

    totalScore = obj.testScore + obj.schoolGrade;
    if (totalScore >= 80) {
        return true;
    }
    else {
        if (obj.isFFamily === true && (totalScore + parentProfession >= 80)) {
            return true;
        }
        return false;
    }
}

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