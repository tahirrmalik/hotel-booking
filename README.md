# LuxeStay — Luxury Hotel Booking Platform (Frontend)

An immersive, high-performance luxury hotel web application built with **React**, **Vite**, and **Tailwind CSS**. Designed with an elegant aesthetic and seamless user journeys, this interface simulates real-world hospitality workflows from interactive room discovery to checkout flows.

Developed under the mentorship of **Abdul Wahab**.

---

## Key Features

* **3D Hero Section & Visuals:** Engaging, high-end hero design setting a luxury brand tone.
* **Room & Suite Catalog:** Filterable room listings with dynamic pricing, amenity lists, and high-resolution galleries.
* **Seamless Booking Workflows:** Interactive date pickers, guest selection logic, and responsive reservation modals.
* **Dining & Experiences Showcase:** Curated sections for on-site restaurants, spa packages, and concierge highlights.
* **Fully Responsive:** Pixel-perfect layout across mobile, tablet, and desktop screens powered by Tailwind CSS.
* **Optimized Performance:** Blazing fast load times and rapid HMR leveraging Vite.

---

## Tech Stack

* **Framework:** [React.js]
* **Build Tool:** [Vite]
* **Styling:** [Tailwind CSS]
* **Icons:** [Lucide React] / [React Icons]
* **Version Control:** Git & GitHub

---

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/](https://github.com/)<your-username>/luxe-hotel-booking.git
   cd luxe-hotel-booking
Install dependencies:

Bash
npm install
Start the local development server:

Bash
npm run dev
Build for production:

Bash
npm run build
Project Structure
Plaintext
├── public/              # Static assets & images
├── src/
│   ├── assets/          # Icons, vectors, and media
│   ├── components/      # Reusable UI components (Navbar, Footer, Modals, Cards)
│   ├── pages/           # Page views (Home, Rooms, Dining, Booking)
│   ├── data/            # Static mock data for rooms and packages
│   ├── App.jsx          # Root component & routing
│   ├── index.css        # Tailwind directives and global styles
│   └── main.jsx         # Application entry point
├── package.json
├── tailwind.config.js
└── vite.config.js

Roadmap & Backend Transition
The client-side interface is complete. The next phase involves transforming this into a full-stack application:

[ ] Connect a Node.js / Express.js REST API

[ ] Database integration with MongoDB / MySQL for room availability & bookings

[ ] User authentication & role-based dashboard (Guest vs. Admin)

[ ] Secure payment gateway integration (Stripe / Mock Gateway)
