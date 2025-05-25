// Qn1. JavaScript Basics & Setup 

console.log("Welcome to the Community Portal");

window.onload = function() {
    alert("Page fully loaded. Welcome!");
};

// Qn2. Syntax, Data Types, and Operators

const eventName = "Music Night";
const eventDate = "2025-06-10";
let availableSeats = 50;

console.log(`Event: ${eventName}`);
console.log(`Date: ${eventDate}`);
console.log(`Available Seats: ${availableSeats}`);

availableSeats--;
console.log(`Seats left: ${availableSeats}`);

// Qn3. Conditionals, Loops, and Error Handling

const events = [
  { name: "Music Night", date: "2025-06-10", seats: 20 },
  { name: "Tech Talk", date: "2024-05-01", seats: 10 },
  { name: "Startup Pitch", date: "2025-06-15", seats: 0 },
  { name: "Coding Marathon", date: "2025-06-20", seats: 30 },
];

const today = new Date().toISOString().split("T")[0];

console.log("Available Events: ");
events.forEach((event) => {
  if (event.date > today && event.seats > 0) {
    console.log(`${event.name} on ${event.date} - (${event.seats} seats left)`);
  } else {
    console.log(`(Hidden: ${event.name} - Invalid or Full)`);
  }
});

function register(eventName) {
  try {
    const event = events.find((e) => e.name === eventName);

    if (!event) {
      throw new Error("Event not found!");
    }

    if (event.date <= today) {
      throw new Error("Cannot register for past events.");
    }

    if (event.seats <= 0) {
      throw new Error("No seats available.");
    }

    event.seats--;
    console.log(`Registered for ${event.name}. Seats left: ${event.seats}`);
  } catch (err) {
    console.error(`Registration failed: ${err.message}`);
  }
}

register("Music Night");
register("Tech Talk");
register("Startup Pitch");
register("Unknown Event");

// Q4. Functions, Scope, Closures, Higher-Order Functions

let events_ = [
  { name: "AI Summit", date: "2025-06-10", seats: 5, category: "Tech" },
  { name: "Music Fiesta", date: "2025-06-15", seats: 3, category: "Music" },
  { name: "StartUp Expo", date: "2025-06-20", seats: 2, category: "Business" },
];

function addEvent(name, date, seats, category) {
  events_.push({ name, date, seats, category });
  console.log(`Event '${name}' added.`);
}

function createRegistrationTracker() {
  const registrationCounts = {};

  return function registerUser(eventName) {
    const event = events_.find((e) => e.name === eventName);

    if (!event) return console.log("Event not found.");
    if (event.seats <= 0) return console.log("No seats left.");

    event.seats--;

    if (!registrationCounts[event.category]) {
      registrationCounts[event.category] = 0;
    }

    registrationCounts[event.category]++;
    console.log(
      `Registered for ${event.name}. (${
        registrationCounts[event.category]
      } total in ${event.category})`
    );
  };
}

const registerUser = createRegistrationTracker();

function filterEventsByCategory(callback) {
  return events_.filter(callback);
}

addEvent("Jazz Evening", "2025-06-30", 4, "Music");

registerUser("AI Summit");
registerUser("Music Fiesta");
registerUser("Jazz Evening");
registerUser("AI Summit");
registerUser("StartUp Expo");

const techEvents = filterEventsByCategory((event) => event.category === "Tech");
console.log("\nTech Events:");
techEvents.forEach((e) => {
  console.log(`${e.name} (${e.seats} seats left)`);
});

// Q5. Objects and Prototypes

class Event {
  constructor(name, date, seats, category) {
    this.name = name;
    this.date = date;
    this.seats = seats;
    this.category = category;
  }
}

Event.prototype.checkAvailability = function () {
  if (this.seats > 0) {
    console.log(`${this.name} has ${this.seats} seats available.`);
    return true;
  } else {
    console.log(`${this.name} is sold out.`);
    return false;
  }
};

const event1 = new Event("Tech Conference", "2025-07-01", 10, "Tech");
const event2 = new Event("Art Workshop", "2025-07-10", 0, "Art");

event1.checkAvailability();
event2.checkAvailability();

console.log("\nEvent 1 Details:");
Object.entries(event1).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// Q6. Arrays and Methods

let communityEvents = [
  { name: "Tech Conference", category: "Technology" },
  { name: "Jazz Night", category: "Music" },
  { name: "Art Expo", category: "Art" },
];

communityEvents.push({ name: "Rock Concert", category: "Music" });
communityEvents.push({ name: "Workshop on Baking", category: "Cooking" });

const musicEvents = communityEvents.filter(
  (event) => event.category === "Music"
);
console.log("\nMusic Events:");
console.log(musicEvents);

const eventCards = communityEvents.map(
  (event) => `${event.name} [${event.category}]`
);
console.log("\n Display Cards:");
eventCards.forEach((card) => console.log(card));

// 7. DOM Manipulation

const container = document.querySelector("#events-container");

function renderEvents() {
  container.innerHTML = "";
  container.style.display = "flex";
  container.style.marginLeft = "300px";
  events.forEach((event) => {
    const card = document.createElement("div");
    card.style.border = "1px solid gray";
    card.style.padding = "10px";
    card.style.margin = "10px";
    card.style.backgroundColor = "white";

    card.innerHTML = `
      <h3>${event.name}</h3>
      <p>Available Seats: ${event.seats}</p>
    `;

    const button = document.createElement("button");
    button.textContent = event.seats > 0 ? "Register" : "Full";
    button.disabled = event.seats === 0;

    button.addEventListener("click", () => {
      event.seats--;
      renderEvents();
    });

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.style.marginLeft = "25px";
    cancelButton.disabled = event.seats >= 5;

    cancelButton.addEventListener("click", () => {
      if (event.seats < 5) event.seats++;
      renderEvents();
    });

    card.appendChild(button);
    card.appendChild(cancelButton);
    container.appendChild(card);
  });
}

renderEvents();

// Q8. Event Handling

function renderEvents(filteredEvents) {
  const container = document.querySelector("#eventsContainer");
  container.innerHTML = "";

  filteredEvents.forEach((event) => {
    const card = document.createElement("div");
    card.innerHTML = `
      <h3>${event.name}</h3>
      <p>Category: ${event.category}</p>
      <button class="register-btn" data-id="${event.id}">Register</button>
    `;
    container.appendChild(card);
  });

  document.querySelectorAll(".register-btn").forEach((btn) => {
    btn.onclick = () => {
      const id = btn.dataset.id;
      alert(`Registered for event ID: ${id}`);
    };
  });
}

document.querySelector("#eventType").onchange = (e) => {
  const selected = e.target.value;
  const filtered =
    selected === "all"
      ? events
      : events.filter((ev) => ev.category === selected);
  renderEvents(filtered);
};

document.querySelector("#searchInput").addEventListener("keydown", (e) => {
  const keyword = e.target.value.toLowerCase();
  const filtered = events.filter((ev) =>
    ev.name.toLowerCase().includes(keyword)
  );
  renderEvents(filtered);
});

renderEvents(events);

// Q9. Async JS, Promises, Async/Await

const spinner = document.getElementById("spinner");
spinner.style.display = "block";

fetch("https://mockapi.io/events")
  .then((response) => response.json())
  .then((data) => {
    spinner.style.display = "none";
    data.forEach((event) => {
      const div = document.createElement("div");
      div.textContent = ` ${event.name} - ${event.date}`;
      container.appendChild(div);
    });
  })
  .catch((error) => {
    spinner.style.display = "none";
    container.innerHTML = `<p style="color:red;">Failed to fetch events.</p>`;
    console.error("Error:", error);
  });

// Q11. Working with Forms

const form = document.getElementById("registrationForm");
const confirmation = document.getElementById("confirmation");

let formSubmitted = false;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  formSubmitted = true;

  const name = form.name.value.trim();
  const date = form.date.value;
  const eventType = form.eventType.options[form.eventType.selectedIndex].text;

  confirmation.textContent = `Thank you, ${name}, for registering for the ${eventType} on ${date}.`;
  form.reset();
});

function validatePhone() {
  const phone = document.getElementById("phone").value;
  const phoneError = document.getElementById("phoneError");
  const regex = /^[0-9]{10}$/;

  if (!regex.test(phone)) {
    phoneError.textContent = "Please Enter a Valid Phone Number";
  } else {
    phoneError.textContent = "";
  }
}

const eventType = document.getElementById("eventType");
const eventFee = document.getElementById("eventFee");

eventType.onchange = function () {
  const fees = {
    music: "₹500",
    food: "₹300",
    charity: "₹200",
    book: "₹150",
    craft: "₹250",
    mic: "₹100",
  };

  const selected = eventType.value;
  eventFee.textContent = fees[selected] || "-";
};

// Q12. AJAX & Fetch API

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;

    const userData = {
      name: username,
    };

    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((response) => {
          if (!response.ok) throw new Error("Failed to register");
          return response.json();
        })
        .then((data) => {
          document.getElementById(
            "message"
          ).textContent = `Registered successfully! Welcome, ${data.name}`;
          document.getElementById("message").style.color = "green";
        })
        .catch((error) => {
          document.getElementById("message").textContent =
            "Registration failed. Please try again.";
          document.getElementById("message").style.color = "red";
        });
    }, 1500);
  });

//Q14. jQuery and JS Frameworks
// Mention one benefit of moving to frameworks like React or Vue
// Answer: Component-based structure: React and Vue allow you to build encapsulated, reusable UI components, making your code more maintainable, scalable, and organized than jQuery’s global scripting approach.
