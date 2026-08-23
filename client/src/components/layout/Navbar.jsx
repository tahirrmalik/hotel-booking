import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X, Gem } from "lucide-react";

const links = [
	["Home", "/"],
	["Rooms", "/rooms"],
	["Dining", "/dining"],
	["Contact", "/contact"],
];

export default function Navbar({ onReserve }) {
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();

	const select = (path) => {
		setOpen(false);
		navigate(path);
	};

	return (
		<header className="navbar">
			<button className="brand" onClick={() => select("/")}>
				<Gem size={21} />
				<span>
					SERENA HOTEL <i>ISLAMABAD</i>
				</span>
			</button>
			<nav className={open ? "nav-open" : ""}>
				{links.map(([label, path]) => (
					<NavLink
						key={label}
						className={({ isActive }) => (isActive ? "active" : "")}
						onClick={() => setOpen(false)}
						to={path}
					>
						{label}
					</NavLink>
				))}
			</nav>
			<button className="btn reserve-top" onClick={onReserve}>
				Reserve Room
			</button>
			<button className="menu" onClick={() => setOpen(!open)}>
				{open ? <X /> : <Menu />}
			</button>
		</header>
	);
}
