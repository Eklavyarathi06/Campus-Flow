# CampusFlow  
### Campus Resource Booking & Visibility System

---

## 📌 Project Overview

CampusFlow is a frontend-based web application designed to solve a real-life coordination problem commonly faced in colleges and hostels — **managing and booking shared campus resources** such as meeting rooms, playing turfs, table tennis tables,pool tables,tv room,etc.

Traditionally, these resources are either booked through emails to higher authorities or used on a first-come-first-serve basis, which often leads to confusion, conflicts, misuse, and wasted time. CampusFlow provides a **centralized booking and visibility system** that allows students to book resources, view existing bookings, and manage them efficiently.

The application is built entirely using **HTML, CSS, and Vanilla JavaScript**, without relying on any frontend frameworks or backend services.

---

## 🎯 Problem Statement

In college and hostel environments:
- There is no centralized system to view who has booked a shared resource.
- Permission-based resources (like meeting rooms) require manual email approvals.
- Open resources (like turf or TT tables) lack visibility, causing conflicts.
- Bookings are often misused, cancelled late, or not honored.
- Students waste time physically checking availability.

CampusFlow addresses these issues by introducing a **transparent, time-slot-based booking and visibility system**.

---

## 🧠 Key Features

### 🔹 Resource Booking System
- Book shared campus resources such as:
  - Meeting Room
  - Playing Turf
  - Table Tennis Table
  - 8 Ball Pool Table
- Time-slot based booking with **start time and end time**.
- Optional purpose field for transparency.

### 🔹 Live Booking Visibility
- Displays all current and upcoming bookings dynamically.
- Shows:
  - Resource name
  - Booker’s name
  - Date and time slot
  - Contact details (phone number and SST email ID)
- Prevents overlapping bookings automatically.

### 🔹 Booking Cancellation
- Bookers can cancel their booking in case of emergencies.
- Cancelled slots immediately become available for others.

### 🔹 Auto-Expiry Handling
- Past bookings automatically appear as expired.
- Ensures the system remains clean without manual intervention.

### 🔹 Activity Log
- Tracks major actions such as:
  - Booking creation
  - Booking cancellation
- Improves transparency and accountability.

### 🔹 Animated Branding & UI
- Custom animated **CampusFlow** logo with continuous letter-based animation.
- Modern dark-themed UI with animations, transitions, and glassmorphism styling.
- Responsive layout for different screen sizes.

---

## 🧱 Technologies Used

- **HTML5** – Application structure  
- **CSS3** – Styling, animations, transitions  
- **Vanilla JavaScript (ES6+)** –  
  - DOM manipulation  
  - Event handling  
  - Application logic  
- **Browser APIs**
  - LocalStorage for client-side persistence  

❌ No frontend frameworks  
❌ No backend services  

---

## 🧩 DOM & JavaScript Concepts Used

- Dynamic DOM creation and updates
- Event-driven programming
- Conditional rendering
- Client-side state management
- Time-based logic (booking expiry and conflicts)
- LocalStorage persistence
- Form validation and user input handling

---

## 🖥️ How to Run the Project

1. Download or clone the repository.
2. Ensure the following files are present:
   - `index.html`
   - `style.css`
   - `script.js`
3. Open `index.html` in any modern web browser.
4. Start booking and viewing campus resources.

No additional setup is required.

---

## 🚀 Future Enhancements

CampusFlow is designed as a scalable system. The following features can be added in future versions:

### 🔔 Smart Notifications
- When a booking is cancelled, a notification can be sent to all users indicating that the slot is now available.
- This encourages faster reuse of freed resources and reduces idle time.

### ⏱️ Cancellation Time Rules
- Introduce a **minimum cancellation window** (e.g., at least 30 minutes before the start time).
- Late cancellations beyond this limit can be flagged as violations.

### ⚠️ Penalty & Restriction System
- Implement a penalty mechanism based on misuse:
  - Late cancellation (less severe penalty)
  - Not cancelling and not appearing (more severe penalty)
- Penalties may include:
  - Temporary restriction from booking (1–2 days or more)
  - Increased penalty duration for repeated offenses
- Severity of penalty can depend on the type of violation.

### 🧾 Complaint & Verification Flow
- Allow users to report cases where:
  - A resource was booked but not used.
  - The booker neither cancelled nor appeared.
- Complaints can include proof (image or description).
- Penalties can be applied after verification.

### 🏛️ Authority Approval Workflow
- For permission-based resources (e.g., meeting rooms):
  - Higher authorities can review booking requests within the app.
  - Authorities can approve or reject requests after reviewing purpose and duration.
  - Authorities can contact the requester directly if clarification is needed.

### 📅 Advanced Availability Views
- Calendar-based availability view for each resource.
- Daily and weekly availability summaries.

### 🔐 User Authentication
- Student login using college email IDs.
- Role-based access (student, authority, admin).

### 🌐 Backend Integration
- Multi-device and multi-user synchronization.
- Central database for bookings and penalties.
- Real-time updates across devices.

---

## ⚠️ Known Limitations

- This is a **frontend-only prototype**.
- All data is stored locally in the browser.
- No real authentication or backend validation.
- Designed for demonstration and academic evaluation purposes.

---

## 🎓 Academic Relevance

This project fulfills all requirements of **Web- Dev Project** by demonstrating:
- Core JavaScript proficiency
- DOM manipulation
- Event-driven programming
- Client-side state handling
- Real-world problem solving using frontend engineering

---


**Eklavya Rathi**
Web Dev II – Final Project  
Batch 2029

