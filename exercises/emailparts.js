function emailParts(email) {
    addressTextArray = email.toLowerCase().split("@");
    userName = addressTextArray[0];
    domainName = addressTextArray[1];
    return `The username is ${userName}. The domain name is ${domainName}`;
}
