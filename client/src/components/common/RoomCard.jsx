import { Users, Maximize2, ArrowUpRight } from "lucide-react";
export default function RoomCard({ room, onBook }) {
  return (
    <article className="room-card">
      <div className="room-image">
        <img src={room.image} alt={room.name} />
        <span>{room.badge}</span>
      </div>
      <div className="room-info">
        <p className="eyebrow">{room.type}</p>
        <div className="room-title">
          <h3>{room.name}</h3>
          <button aria-label={`Book ${room.name}`} onClick={() => onBook(room)}>
            <ArrowUpRight size={20} />
          </button>
        </div>
        <div className="specs">
          <span>
            <Users size={15} />
            {room.guests} guests
          </span>
          <span>
            <Maximize2 size={15} />
            {room.size}
          </span>
        </div>
        <div className="badges">
          {room.amenities.map((a) => (
            <em key={a}>{a}</em>
          ))}
        </div>
        <div className="room-price">
          <strong>
            PKR {room.rate.toLocaleString()} <small>/ night</small>
          </strong>
          <button onClick={() => onBook(room)}>Reserve</button>
        </div>
      </div>
    </article>
  );
}
