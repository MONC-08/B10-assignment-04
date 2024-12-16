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

const output = calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true });
console.log(output);