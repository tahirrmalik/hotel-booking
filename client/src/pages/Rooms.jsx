import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import RoomCard from "../components/common/RoomCard";
import { rooms } from "../data/hotelData";
export default function Rooms({ onReserve }) {
  const [type, setType] = useState("All"),
    [q, setQ] = useState(""),
    [cap, setCap] = useState(1),
    [sort, setSort] = useState("Recommended");
  const types = ["All", "Presidential", "Deluxe", "Executive"];
  const list = useMemo(
    () =>
      rooms
        .filter(
          (r) =>
            (type === "All" || r.type === type) &&
            r.guests >= cap &&
            r.name.toLowerCase().includes(q.toLowerCase()),
        )
        .sort((a, b) =>
          sort === "Price: low to high"
            ? a.rate - b.rate
            : sort === "Price: high to low"
              ? b.rate - a.rate
              : 0,
        ),
    [type, q, cap, sort],
  );
  return (
    <main className="page">
      <div className="page-hero rooms-hero">
        <p className="eyebrow">ACCOMMODATIONS</p>
        <h1>
          Find your <i>perspective.</i>
        </h1>
        <p>
          Each suite holds its own expression of the coast, made personal
          through impeccable detail.
        </p>
      </div>
      <section className="catalog section">
        <div className="filters">
          <div className="filter-types">
            {types.map((x) => (
              <button
                className={type === x ? "selected" : ""}
                onClick={() => setType(x)}
                key={x}
              >
                {x}
              </button>
            ))}
          </div>
          <div className="filter-controls">
            <label>
              <Search size={16} />
              <input
                placeholder="Search suites"
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
            </label>
            <label>
              <SlidersHorizontal size={16} />
              <select value={cap} onChange={(e) => setCap(+e.target.value)}>
                <option value="1">Any capacity</option>
                <option value="2">2+ guests</option>
                <option value="3">3+ guests</option>
                <option value="4">4 guests</option>
              </select>
            </label>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option>Recommended</option>
              <option>Price: low to high</option>
              <option>Price: high to low</option>
            </select>
          </div>
        </div>
        <p className="result-count">{list.length} SUITES FOUND</p>
        <div className="room-grid">
          {list.map((r) => (
            <RoomCard room={r} key={r.id} onBook={onReserve} />
          ))}
        </div>
      </section>
    </main>
  );
}
