import React from "react";
import { NavLink } from "react-router-dom";
import {MdOutlineMenu} from 'react-icons/md'
import {MdClose} from 'react-icons/md'
import { useState } from "react";

const MobileNavigation= () => {
  const [click, setClick] = useState(false);
  const Hamburger = <MdOutlineMenu className="HamburgerMenu"
  size="30px" 
  color="black"
  onClick={() => setClick(!click)}/>

  const Close = <MdClose className="HamburgerMenu"
  size="30px" 
  color="black"
  onClick={() => setClick(!click)} />

return (
<nav className="menu-container-mobile">
  {click ? Close : Hamburger}
  {click &&  
            <ul className="menu-list">
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  end
                >
                  Hem
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/filmtraffar"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  end
                >
                  Filmträffar
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/topplistor"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  end
                >
                  Topplistor
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/kommande"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  end
                >
                  Kommande
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/livecommunitychat"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  end
                >
                  Live community chat
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/kontakt"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  end
                >
                  Kontakt
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/omoss"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  end
                >
                  Om oss
                </NavLink>
              </li>
            </ul>}
          </nav>
);
};

export default MobileNavigation;