const congressionalDistrict = {
    district: "1"
}

const taxesStatement = {
    summary: "sflkwerjwer"
}
const jobsStatement = {
    summary: "sflkwerjwer"
}
const infrastructureStatement = {
    summary: "sflkwerjwer"
}
const healthCareStatement = {
    summary: "sflkwerjwer"
}
const crimeAndEnforcementStatement = {
    summary: "sflkwerjwer"
}

const donationForm = {
    url: "www.donatenow.com"
}

const events = {
    date: "1/2/2018",
    time: "3:00 pm",
    title: "saving the world"
}

const volunteers = {
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phoneNumber: "",
    availability: "",
    activities: ""
}

const biography = {
    content: ""
}

const images = {
    headShot: "",
    family: "",
    constituents: ""
}

const missionStatment = {
    statement: ""
}

const votingURL = {
    url: ""
}

function changeTaxesStatement (taxesStatementObject, summaryToUpdate) {
    taxesStatementObject.summary = summaryToUpdate
}

changeTaxesStatement(taxesStatement, "taxes are great")

console.log(taxesStatement)

console.log(events)

function changeEventDate (eventObject, eventPropertyToUpdate) {
    eventObject.date = eventPropertyToUpdate
}

changeEventDate(events, "3/23/2018")

console.log(events)

function change(object, property, newValue) {
    object[property] = newValue
}

change()