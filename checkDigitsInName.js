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

const output = checkDigitsInName("Name2024");
console.log(output);