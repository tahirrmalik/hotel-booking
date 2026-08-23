import { CalendarDays, Users, ChevronDown } from "lucide-react";
export default function BookingBar({ onReserve, compact = false }) {
  return (
    <div className={`booking-bar ${compact ? "booking-compact" : ""}`}>
      <label>
        <span>CHECK-IN</span>
        <div>
          <CalendarDays size={17} />
          <input type="date" defaultValue="2026-09-12" />
        </div>
      </label>
      <label>
        <span>CHECK-OUT</span>
        <div>
          <CalendarDays size={17} />
          <input type="date" defaultValue="2026-09-16" />
        </div>
      </label>
      <label>
        <span>GUESTS</span>
        <div>
          <Users size={17} />
          <select defaultValue="2">
            <option>1 Guest</option>
            <option value="2">2 Guests</option>
            <option>3 Guests</option>
            <option>4 Guests</option>
          </select>
        </div>
      </label>
      <label className="suite-select">
        <span>SUITE TYPE</span>
        <div>
          <select defaultValue="Any Suite">
            <option>Any Suite</option>
            <option>Deluxe</option>
            <option>Executive</option>
            <option>Presidential</option>
          </select>
          <ChevronDown size={15} />
        </div>
      </label>
      <button className="btn btn-light" onClick={onReserve}>
        Check availability
      </button>
    </div>
  );
}
