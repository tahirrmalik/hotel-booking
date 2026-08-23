import { useState } from "react";
import { Clock, ChefHat, ArrowUpRight, X } from "lucide-react";
import { restaurants } from "../data/hotelData";
export default function Dining() {
  const [modal, setModal] = useState(false);
  return (
    <main className="page">
      <div className="page-hero dining-hero">
        <p className="eyebrow">CULINARY ARTISTRY</p>
        <h1>
          At the table,
          <br />
          <i>everything lingers.</i>
        </h1>
        <p>Three distinct destinations, one devotion to the unforgettable.</p>
      </div>
      <section className="section dining-list">
        {restaurants.map((r, i) => (
          <article className="restaurant" key={r.name}>
            <img src={r.image} alt={r.name} />
            <div>
              <p className="eyebrow">
                0{i + 1} · {r.kind}
              </p>
              <h2>{r.name}</h2>
              <p className="restaurant-copy">
                An immersive expression of place, driven by exacting technique
                and the finest seasonal provenance.
              </p>
              <dl>
                <div>
                  <dt>
                    <Clock size={15} /> HOURS
                  </dt>
                  <dd>{r.hours}</dd>
                </div>
                <div>
                  <dt>
                    <ChefHat size={15} /> SIGNATURE
                  </dt>
                  <dd>{r.signature}</dd>
                </div>
                <div>
                  <dt>DRESS CODE</dt>
                  <dd>{r.dress}</dd>
                </div>
              </dl>
              <button className="text-link" onClick={() => setModal(true)}>
                Reserve a table <ArrowUpRight size={17} />
              </button>
            </div>
          </article>
        ))}
      </section>
      {modal && (
        <div className="modal-backdrop">
          <div className="table-modal">
            <button className="modal-close" onClick={() => setModal(false)}>
              <X />
            </button>
            <p className="eyebrow">DINING RESERVATION</p>
            <h2>Your table awaits.</h2>
            <input placeholder="Your name" />
            <input type="email" placeholder="Email address" />
            <select>
              <option>Select a restaurant</option>
              {restaurants.map((r) => (
                <option key={r.name}>{r.name}</option>
              ))}
            </select>
            <input type="date" />
            <button
              className="btn btn-light full"
              onClick={() => setModal(false)}
            >
              Request a table
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
