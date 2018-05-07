// A new "virtual" document fragment to contain components
const fragment = document.createDocumentFragment()

// const section = document.querySelector("#messages")

const section1 = document.createElement("section")
section1.textContent = "Hey so and so"
section1.classList.add("message")
fragment.appendChild(section1)

const section2 = document.createElement("section")
section2.textContent = "How are you?"
section2.classList.add("message")
fragment.appendChild(section2)

const section3 = document.createElement("section")
section3.textContent = "I'm great!"
section3.classList.add("message")
fragment.appendChild(section3)

const section4 = document.createElement("section")
section4.textContent = "Where are you going tonight? "
section4.classList.add("message")
fragment.appendChild(section4)

const section5 = document.createElement("section")
section5.textContent = "Home"
section5.classList.add("message")
fragment.appendChild(section5)

document.querySelector("#messages").appendChild(fragment)

// console.log(section);

// Breakdown of example of creating an element with a class
const bush = document.createElement('li') // <li></li>
bush.textContent = "George Bush" //  <li>George Bush</li>
const bushClass = document.createAttribute('class') // class=""
bushClass.value = 'president' // class="president"
bush.setAttributeNode(bushClass) // <li class="president">George Bush</li>
