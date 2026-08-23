import { useState } from "react";
import { MapPin, Phone, Mail, ChevronDown } from "lucide-react";
const faqs = [
  [
    "When are check-in and check-out?",
    "Check-in begins at 15:00 and check-out is at 12:00. Early arrivals and late departures are arranged whenever availability allows.",
  ],
  [
    "Is valet parking available?",
    "Complimentary secure valet parking is available for all resident guests, around the clock.",
  ],
  [
    "Do you arrange airport transfers?",
    "Yes. Our concierge offers private chauffeured, helicopter and yacht transfers from all regional arrival points.",
  ],
  [
    "What is your cancellation policy?",
    "Reservations may be amended or cancelled up to 14 days before arrival. Select offers may have individual terms.",
  ],
];
export default function Contact() {
  const [open, setOpen] = useState(null),
    [sent, setSent] = useState(false),
    [form, setForm] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  const submit = (e) => {
    e.preventDefault();
    if (form.name && /\S+@\S+/.test(form.email) && form.message) setSent(true);
  };
  return (
    <main className="page">
      <div className="page-hero contact-hero">
        <p className="eyebrow">AT YOUR SERVICE</p>
        <h1>
          Begin a<br />
          <i>conversation.</i>
        </h1>
        <p>
          For reservations, private events or a tailored arrival, our concierge
          is here.
        </p>
      </div>
      <section className="section contact-grid">
        <div className="contact-details">
          <p className="eyebrow">THE RESORT</p>
          <h2>
            Meet us at
            <br />
            the edge of the world.
          </h2>
          <div className="map-mock">
            <MapPin size={28} />
            <span>
              SERENA HOTEL
              <br />
              ISLAMABAD, PAKISTAN
            </span>
          </div>
          <p>
            <Phone /> 92 51 111 133 133
          </p>
          <p>
            <Mail /> concierge.ish@serena.com.pk
          </p>
          <p className="shuttle">
            PRIVATE AIRPORT TRANSFERS
            <br />
            <span>50 minutes from Santorini Airport</span>
          </p>
        </div>
        <form className="contact-form" onSubmit={submit}>
          {sent ? (
            <div className="sent">
              <p className="eyebrow">MESSAGE RECEIVED</p>
              <h2>We’ll be in touch shortly.</h2>
              <button
                className="btn"
                type="button"
                onClick={() => setSent(false)}
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            <>
              <p className="eyebrow">MAKE AN INQUIRY</p>
              <label>
                NAME
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </label>
              <label>
                EMAIL
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </label>
              <label>
                SUBJECT
                <select
                  value={form.subject}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
                >
                  <option>General inquiry</option>
                  <option>Suite reservation</option>
                  <option>Private event</option>
                </select>
              </label>
              <label>
                MESSAGE
                <textarea
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />
              </label>
              <button className="btn btn-light">Send inquiry</button>
            </>
          )}
        </form>
      </section>
      <section className="faq section">
        <p className="eyebrow">FREQUENTLY ASKED</p>
        <h2>Details, considered.</h2>
        {faqs.map(([q, a], i) => (
          <div className="faq-item" key={q}>
            <button onClick={() => setOpen(open === i ? null : i)}>
              {q}
              <ChevronDown className={open === i ? "rotate" : ""} />
            </button>
            {open === i && <p>{a}</p>}
          </div>
        ))}
      </section>
    </main>
  );
}
