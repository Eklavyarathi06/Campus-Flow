const bookingForm = document.getElementById("bookingForm");
const bookingList = document.getElementById("bookingList");
const activityLog = document.getElementById("activityLog");
const flowText = document.getElementById("flowText");

let bookings = JSON.parse(localStorage.getItem("campus_bookings")) || [];

/* =======================
   LOGO ANIMATION
======================= */
const letters = ["F", "l", "o", "w"];
let index = letters.length;

setInterval(() => {
  if (index > 0) {
    flowText.textContent = letters.slice(0, index - 1).join("");
    index--;
  } else {
    index = letters.length;
    flowText.textContent = letters.join("");
  }
}, 700);

/* =======================
   HELPERS
======================= */
function save() {
  localStorage.setItem("campus_bookings", JSON.stringify(bookings));
}

function logActivity(text) {
  const li = document.createElement("li");
  li.textContent = `${new Date().toLocaleString()} — ${text}`;
  activityLog.prepend(li);
}

function isExpired(b) {
  return new Date(`${b.date}T${b.endTime}`) < new Date();
}

function overlaps(a, b) {
  if (a.resource !== b.resource || a.date !== b.date) return false;
  return !(a.endTime <= b.startTime || a.startTime >= b.endTime);
}

/* =======================
   RENDER
======================= */
function renderBookings() {
  bookingList.innerHTML = "";

  if (!bookings.length) {
    bookingList.innerHTML = "<p style='opacity:.6'>No bookings yet</p>";
    return;
  }

  bookings.forEach(b => {
    const card = document.createElement("div");
    card.className = `booking-card ${isExpired(b) ? "expired" : "active"}`;

    card.innerHTML = `
      <div class="booking-header">
        <strong>${b.resource}</strong>
        <span>${b.user}</span>
      </div>
      <p>${b.date} | ${b.startTime} – ${b.endTime}</p>
      <p>📞 ${b.phone} | 📧 ${b.email}</p>
      <p>${b.purpose || "No purpose specified"}</p>
      ${!isExpired(b) ? `<div class="booking-actions"><button data-id="${b.id}">Cancel</button></div>` : ""}
    `;

    card.onclick = e => {
      if (e.target.tagName === "BUTTON") {
        bookings = bookings.filter(x => x.id !== e.target.dataset.id);
        logActivity("Booking cancelled");
        save();
        renderBookings();
      }
    };

    bookingList.appendChild(card);
  });
}

/* =======================
   FORM SUBMIT
======================= */
bookingForm.onsubmit = e => {
  e.preventDefault();

  const newBooking = {
    id: Date.now().toString(),
    user: userName.value.trim(),
    phone: phone.value.trim(),
    email: email.value.trim(),
    resource: resource.value,
    date: date.value,
    startTime: startTime.value,
    endTime: endTime.value,
    purpose: purpose.value.trim()
  };

  if (newBooking.startTime >= newBooking.endTime) {
    alert("End time must be after start time");
    return;
  }

  if (bookings.some(b => overlaps(newBooking, b) && !isExpired(b))) {
    alert("This resource is already booked for that time.");
    return;
  }

  bookings.push(newBooking);
  logActivity(`Booked ${newBooking.resource} by ${newBooking.user}`);
  save();
  renderBookings();
  bookingForm.reset();
};

renderBookings();

