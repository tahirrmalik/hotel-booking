import { ArrowUpRight, Instagram, Facebook, MapPin, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const links = [
	["Home", "/"],
	["Rooms", "/rooms"],
	["Dining", "/dining"],
	["Contact", "/contact"],
];

export default function Footer() {
	const navigate = useNavigate();

	return (
		<footer>
			<div className="footer-top">
				<div>
					<p className="eyebrow">STAY IN THE KNOW</p>
					<h2>
						Notes from
						<br />
						the extraordinary.
					</h2>
				</div>
				<div className="newsletter">
					<p>
						Private offers, seasonal stories, and the art of living well—
						delivered sparingly.
					</p>
					<div>
						<input placeholder="Your email address" />
						<button>
							<ArrowUpRight size={20} />
						</button>
					</div>
				</div>
			</div>
			<div className="footer-grid">
				<div className="footer-brand">
					SERENA HOTEL <span>ISLAMABAD</span>
					<p>Where the horizon becomes yours.</p>
					<div className="social">
						<Instagram />
						<Facebook />
					</div>
				</div>
				<div>
					<b>EXPLORE</b>
					{links.map(([label, path]) => (
						<button key={label} onClick={() => navigate(path)}>
							{label}
						</button>
					))}
				</div>
				<div>
					<b>CONTACT</b>
					<p>
						<MapPin size={15} /> Khayaban-e-Suhrawardy, G-5/1
					</p>
					<p>Islamabad, Pakistan</p>
					<p>
						<Phone size={15} /> +92 51 111 133 133
					</p>
				</div>
				<div>
					<b>CONCIERGE</b>
					<p>Available 24 hours</p>
					<p>concierge.ish@serena.com.pk</p>
					<p>Private protocol transfers & heritage reservations</p>
				</div>
			</div>
			<div className="copyright">
				© 2026 SERENA HOTEL ISLAMABAD <span>PRIVACY · TERMS · ACCESSIBILITY</span>
			</div>
		</footer>
	);
}
