import React from "react";

interface NavbarProps {
    navOpen: boolean;
    setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
    route: string;
    routes: { label: string; path: string }[];
}

const Navbar: React.FC<NavbarProps> = ({
    navOpen,
    setNavOpen,
    route,
    routes,
}) => {
    return (
        <header className="topbar">
            <div className="topbar-inner">
                <div className="brand">Julian Silva</div>
                <button
                    type="button"
                    className={`nav-toggle${navOpen ? " nav-toggle-open" : ""}`}
                    onClick={() => setNavOpen((open) => !open)}
                    aria-label="Toggle navigation"
                    aria-expanded={navOpen}
                >
                    <span />
                    <span />
                    <span />
                </button>
                <nav className={`nav${navOpen ? " nav-open" : ""}`}>
                    {routes.map((navRoute) => (
                        <a
                            key={navRoute.path}
                            href={`#${navRoute.path}`}
                            className={route === navRoute.path ? "active" : undefined}
                        >
                            {navRoute.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
