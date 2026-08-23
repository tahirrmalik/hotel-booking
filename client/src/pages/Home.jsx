import { ArrowDown, ArrowUpRight, Star, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Hero3DScene from "../components/3d/Hero3DScene";
import BookingBar from "../components/common/BookingBar";
import RoomCard from "../components/common/RoomCard";
import { rooms, reviews } from "../data/hotelData";
import { useState } from "react";
export default function Home({ onReserve }) {
  const [review, setReview] = useState(0);
  const navigate = useNavigate();
  const r = reviews[review];
  return (
    <>
      <section className="hero">
        <Hero3DScene />
        <div className="hero-noise" />
        <div className="hero-copy">
          <p className="eyebrow">SERENA HOTEL · ISLAMABAD</p>
          <h1>
            Beyond
            <br />
            <i>expectation.</i>
          </h1>
          <p className="hero-intro">
            A timeless sanctuary cradled by heritage and grandeur, created for
            the beautifully unhurried.
          </p>
          <button className="text-link" onClick={() => navigate("/rooms")}>
            Explore <ArrowUpRight size={17} />
          </button>
        </div>
        <div className="scroll">
          <ArrowDown size={17} /> SCROLL TO DISCOVER
        </div>
        <div className="hero-book">
          <BookingBar onReserve={onReserve} />
        </div>
      </section>
      <section className="intro section">
        <p className="eyebrow">THE SERENA WAY</p>
        <h2>
          Timeless heritage,
          <br />
          without compromise.
        </h2>
        <p>
          Here, exquisite Islamic architecture meets the lush serenity of the
          Margalla foothills. Serena is a sanctuary where time slows down, every
          courtyard tells a story of artisanal grandeur, and hospitality carries
          the warm, intuitive grace of centuries-old tradition.
        </p>
        <div className="stat-row">
          <div>
            <strong>387</strong>
            <span>Regal rooms & heritage suites</span>
          </div>
          <div>
            <strong>14 Acres</strong>
            <span>Landscaped gardens & private courtyards</span>
          </div>
          <div>
            <strong>24/7</strong>
            <span>Bespoke diplomatic concierge</span>
          </div>
        </div>
      </section>
      <section className="section suites">
        <div className="section-head">
          <div>
            <p className="eyebrow">PRIVATE QUARTERS</p>
            <h2>
              Suites of
              <br />
              singular character.
            </h2>
          </div>
          <button className="text-link" onClick={() => navigate("/rooms")}>
            View All <ArrowUpRight size={17} />
          </button>
        </div>
        <div className="room-grid">
          {rooms.slice(0, 3).map((room) => (
            <RoomCard key={room.id} room={room} onBook={onReserve} />
          ))}
        </div>
      </section>
      <section className="experience">
        <div className="experience-image" />
        <div>
          <p className="eyebrow">THE RITUAL OF WELLBEING</p>
          <h2>
            Restore your
            <br />
            <i>natural rhythm.</i>
          </h2>
          <p>
            Volcanic minerals, therapeutic waters and the deep exhale of a
            horizon without end. Our spa is designed as a return to yourself.
          </p>
          <button className="btn" onClick={() => navigate("/amenities")}>
            Discover the spa
          </button>
        </div>
      </section>
      <section className="review section">
        <Sparkles size={22} />
        <p className="eyebrow">GUEST IMPRESSIONS</p>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((x) => (
            <Star key={x} fill="currentColor" size={15} />
          ))}
        </div>
        <blockquote>“{r.quote}”</blockquote>
        <p className="reviewer">
          {r.author} · {r.place}
        </p>
        <div className="review-nav">
          {reviews.map((_, i) => (
            <button
              aria-label={`Review ${i + 1}`}
              className={i === review ? "selected" : ""}
              key={i}
              onClick={() => setReview(i)}
            />
          ))}
        </div>
      </section>
    </>
  );
}
