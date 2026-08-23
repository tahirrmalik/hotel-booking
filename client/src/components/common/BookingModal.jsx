import { useMemo, useState } from "react";
import { X, CheckCircle2, ChevronRight } from "lucide-react";
import { rooms } from "../../data/hotelData";
const nightsBetween = (a, b) =>
  Math.max(1, Math.ceil((new Date(b) - new Date(a)) / 86400000));
export default function BookingModal({ room, onClose }) {
  const [step, setStep] = useState(1),
    [selected, setSelected] = useState(room || rooms[0]),
    [dates, setDates] = useState({ in: "2026-09-12", out: "2026-09-16" }),
    [form, setForm] = useState({ name: "", email: "", phone: "" }),
    [error, setError] = useState("");
  const nights = useMemo(() => nightsBetween(dates.in, dates.out), [dates]),
    total = nights * selected.rate;
  const next = () => {
    if (step === 2 && (!form.name || !/\S+@\S+\.\S+/.test(form.email))) {
      setError("Please enter your name and a valid email.");
      return;
    }
    setError("");
    setStep((s) => s + 1);
  };
  return (
    <div className="modal-backdrop">
      <section className="booking-modal">
        <button className="modal-close" onClick={onClose}>
          <X />
        </button>
        {step < 3 && (
          <div className="steps">
            <span className={step >= 1 ? "on" : ""}>01 Stay</span>
            <i />
            <span className={step >= 2 ? "on" : ""}>02 Details</span>
            <i />
            <span>03 Confirmed</span>
          </div>
        )}
        {step === 1 && (
          <>
            <p className="eyebrow">YOUR RESERVATION</p>
            <h2>Shape your stay.</h2>
            <div className="modal-grid">
              <label>
                SUITE
                <select
                  value={selected.id}
                  onChange={(e) =>
                    setSelected(rooms.find((r) => r.id === +e.target.value))
                  }
                >
                  {rooms.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name} — PKR{r.rate}/night
                    </option>
                  ))}
                </select>
              </label>
              <label>
                CHECK-IN
                <input
                  type="date"
                  value={dates.in}
                  onChange={(e) => setDates({ ...dates, in: e.target.value })}
                />
              </label>
              <label>
                CHECK-OUT
                <input
                  type="date"
                  value={dates.out}
                  min={dates.in}
                  onChange={(e) => setDates({ ...dates, out: e.target.value })}
                />
              </label>
            </div>
            <div className="estimate">
              <span>
                {nights} night{nights > 1 ? "s" : ""} · {selected.name}
              </span>
              <strong>
                PKR{total.toLocaleString()} <small>estimated</small>
              </strong>
            </div>
            <button className="btn btn-light full" onClick={next}>
              Continue <ChevronRight size={17} />
            </button>
          </>
        )}
        {step === 2 && (
          <>
            <p className="eyebrow">GUEST DETAILS</p>
            <h2>Nearly there.</h2>
            <div className="modal-grid details">
              <label>
                FULL NAME
                <input
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </label>
              <label>
                EMAIL ADDRESS
                <input
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </label>
              <label>
                PHONE NUMBER
                <input
                  placeholder="+92 51 111 133 133"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </label>
            </div>
            {error && <p className="form-error">{error}</p>}
            <button className="btn btn-light full" onClick={next}>
              Confirm reservation <ChevronRight size={17} />
            </button>
          </>
        )}
        {step === 3 && (
          <div className="confirmation">
            <CheckCircle2 size={56} />
            <p className="eyebrow">RESERVATION CONFIRMED</p>
            <h2>Welcome to Serena Hotel.</h2>
            <p>
              Your suite is held. We’ve sent the itinerary to{" "}
              <b>{form.email}</b>.
            </p>
            <div className="reference">
              REFERENCE ID{" "}
              <strong>AET-{Math.floor(100000 + Math.random() * 899999)}</strong>
            </div>
            <button className="btn btn-light" onClick={onClose}>
              Return to resort
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
