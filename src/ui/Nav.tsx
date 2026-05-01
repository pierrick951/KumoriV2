import { useState } from "react";

const HomeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const LogoutIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

type Tab = "home" | "5days" | "favorites";

const navItems = [
  { id: "home" as Tab, label: "Home", icon: <HomeIcon /> },
  { id: "5days" as Tab, label: "5 days", icon: <SunIcon /> },
  { id: "favorites" as Tab, label: "Favorites", icon: <StarIcon /> },
];

export default function Sidebar({
  activeTab = "home",
  onTabChange,
  onLogout,
}: {
  activeTab?: Tab;
  onTabChange?: (t: Tab) => void;
  onLogout?: () => void;
}) {
  const [active, setActive] = useState<Tab>(activeTab);

  const handleTab = (id: Tab) => {
    setActive(id);
    onTabChange?.(id);
  };

  return (
    <aside style={{
      width: "140px",
      minWidth: "140px",
      height: "calc(100vh - 24px)",
      backgroundColor: "#111111",
      borderRadius: "16px",
      display: "flex",
      flexDirection: "column",
      padding: "16px 10px",
      fontFamily: "'DM Sans', sans-serif",
      margin: "12px 0 12px 12px",
    }}>
      <nav style={{ display: "flex", flexDirection: "column", gap: "2px", flex: 1 }}>
        {navItems.map((item, index) => {
          const isActive = active === item.id;
          return (
            <div key={item.id}>
              <button
                onClick={() => handleTab(item.id)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 14px",
                  borderRadius: "50px",
                  border: "none",
                  cursor: "pointer",
                  backgroundColor: isActive ? "#ffffff" : "transparent",
                  color: isActive ? "#111111" : "rgba(255,255,255,0.4)",
                  fontSize: "13px",
                  fontWeight: isActive ? 500 : 400,
                  fontFamily: "'DM Sans', sans-serif",
                  transition: "all 0.15s ease",
                  textAlign: "left",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={e => {
                  if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                }}
                onMouseLeave={e => {
                  if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.4)";
                }}
              >
                {item.icon}
                {item.label}
              </button>

              {index === 0 && (
                <div style={{
                  height: "1px",
                  backgroundColor: "rgba(255,255,255,0.08)",
                  margin: "8px 10px",
                }} />
              )}
            </div>
          );
        })}
      </nav>

      <button
        onClick={onLogout}
        style={{
          display: "flex", alignItems: "center", gap: "8px",
          padding: "10px 14px", borderRadius: "50px", border: "none",
          cursor: "pointer", backgroundColor: "transparent",
          color: "rgba(255,255,255,0.35)", fontSize: "13px",
          fontFamily: "'DM Sans', sans-serif", transition: "all 0.15s ease",
          width: "100%", whiteSpace: "nowrap",
        }}
        onMouseEnter={e => { e.currentTarget.style.color = "rgba(255,100,80,0.85)"; }}
        onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.35)"; }}
      >
        <LogoutIcon /> Log out
      </button>
    </aside>
  );
}