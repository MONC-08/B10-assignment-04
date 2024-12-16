function sendNotification(email) {
    if (!email.includes("@")) {
        return "Invalid Email";
    }

    const strToArray = email.split("@");
    const username = strToArray[0];
    const domainName = strToArray[1];

    return `${username} sent you an email from ${domainName}`;
}

const output = sendNotification("farhan34@yahoo.com");
console.log(output);
