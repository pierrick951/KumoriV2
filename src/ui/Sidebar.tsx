// import { NavLink } from 'react-router-dom';
// import { Home, Sun, Star, LogOut } from 'lucide-react';


// const Sidebar = () => {
//   const navItemStyles = ({ isActive }: { isActive: boolean }) =>
//     [
//       'flex items-center gap-3 transition-all duration-200 cursor-pointer',
//       'rounded-[16px] px-4 py-3',
//       isActive
//         ? 'bg-[#F3F4F6] text-[#09090b]'
//         : 'text-[#F3F4F6]/80 hover:bg-[#ffffff]/[0.02]',
//     ].join(' ');

//   return (
//     <nav
//       style={{
//         width: '146px',
//         minWidth: '146px',
//         height: '100vh',
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         padding: '16px 12px',
//         zIndex: 50,
//         overflowY: 'hidden',
//         backgroundColor: '#09090b',
//         borderRadius: '16px',
//         display: 'flex',
//         flexDirection: 'column',
//         fontFamily: "'Inter', sans-serif",
//       }}
//     >
//       {/* Top section */}
//       <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

//         <NavLink to="/" end className={navItemStyles}
//           style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
//         >
//           <Home size={20} className="shrink-0" />
//           <span style={{ fontSize: '14px', fontWeight: 500, lineHeight: 1 }}>Home</span>
//         </NavLink>

//         {/* Separator — #F3F4F6 at 80% opacity */}
//         <div style={{
//           height: '1px',
//           borderRadius: '8px',
//           backgroundColor: 'rgba(243, 244, 246, 0.8)',
//           padding: '0 8px',
//         }} />

//         <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
//           <NavLink to="/forecast" className={navItemStyles}
//             style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
//           >
//             <Sun size={20} className="shrink-0" />
//             <span style={{ fontSize: '14px', fontWeight: 500, lineHeight: 1 }}>5 days</span>
//           </NavLink>

//           <NavLink to="/favorites" className={navItemStyles}
//             style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
//           >
//             <Star size={20} className="shrink-0" />
//             <span style={{ fontSize: '14px', fontWeight: 500, lineHeight: 1 }}>Favorites</span>
//           </NavLink>
//         </div>
//       </div>

//       {/* Logout — toujours en bas */}
//       <div style={{ marginTop: 'auto' }}>
//         <button
//           style={{
//             width: '100%',
//             display: 'flex',
//             alignItems: 'center',
//             gap: '12px',
//             padding: '12px 16px',
//             borderRadius: '16px',
//             border: 'none',
//             backgroundColor: 'transparent',
//             color: 'rgba(243, 244, 246, 0.8)',
//             fontSize: '14px',
//             fontWeight: 500,
//             fontFamily: "'Inter', sans-serif",
//             cursor: 'pointer',
//             transition: 'color 0.2s',
//             lineHeight: 1,
//           }}
//           onMouseEnter={e => { e.currentTarget.style.color = 'rgb(239 68 68)'; }}
//           onMouseLeave={e => { e.currentTarget.style.color = 'rgba(243, 244, 246, 0.8)'; }}
//         >
//           <LogOut size={20} />
//           <span>Log out</span>
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Sidebar;


import { NavLink } from 'react-router-dom';
import { Home, Sun, Star, LogOut } from 'lucide-react';

const Sidebar = () => {
  const navItemStyles = ({ isActive }: { isActive: boolean }) =>
    [
      'flex items-center gap-3 transition-all duration-200 cursor-pointer',
      'rounded-[16px] px-4 py-3',
      isActive
        ? 'bg-[#F3F4F6] text-[#09090b]'
        : 'text-[#F3F4F6]/80 hover:bg-[#ffffff]/[0.02]',
    ].join(' ');

  return (
    <nav
      style={{
        width: '146px',
        minWidth: '146px',
        height: '100%',
        padding: '16px 12px',
        overflowY: 'hidden',
        backgroundColor: '#09090b',
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

        <NavLink to="/" end className={navItemStyles}
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800 }}
        >
          <Home size={20} className="shrink-0" />
          <span style={{ fontSize: '14px', fontWeight: 500, lineHeight: 1 }}>Home</span>
        </NavLink>

        <div style={{ padding: '0 8px' }}>
          <div style={{
            height: '1px',
            borderRadius: '8px',
            backgroundColor: 'rgba(243, 244, 246, 0.8)',
          }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <NavLink to="/forecast" className={navItemStyles}
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
          >
            <Sun size={20} className="shrink-0" />
            <span style={{ fontSize: '14px', fontWeight: 500, lineHeight: 1 }}>5 days</span>
          </NavLink>

          <NavLink to="/favorites" className={navItemStyles}
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
          >
            <Star size={20} className="shrink-0" />
            <span style={{ fontSize: '14px', fontWeight: 500, lineHeight: 1 }}>Favorites</span>
          </NavLink>
        </div>
      </div>

      <div style={{ marginTop: 'auto' }}>
        <button
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 16px',
            borderRadius:'rounded-full',
            border: 'none',
            backgroundColor: 'transparent',
            color: 'rgba(243, 244, 246, 0.8)',
            fontSize: '14px',
            fontWeight: 500,
            fontFamily: "'Inter', sans-serif",
            cursor: 'pointer',
            transition: 'color 0.2s',
            lineHeight: 1,
          }}
          onMouseEnter={e => { e.currentTarget.style.color = 'rgb(239 68 68)'; }}
          onMouseLeave={e => { e.currentTarget.style.color = 'rgba(243, 244, 246, 0.8)'; }}
        >
          <LogOut size={20} />
          <span>Log out</span>
        </button>
      </div>
    </nav>
  );  
};

export default Sidebar;