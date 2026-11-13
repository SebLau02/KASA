import { useState } from "react";
import Chevron from "/chevron.png";

function Collapse({ label, content, expanded = false, ...props }) {
  const [open, setOpen] = useState(expanded);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="Collapse" {...props}>
      <button className="Collapse__toggler" onClick={handleToggle}>
        {label}
        <img
          src={Chevron}
          className={open ? "active" : ""}
          alt={open ? "fermer" : "ouvrir"}
        />
      </button>
      <div className={`Collapse__content ${open ? "open" : ""}`}>
        <div className="Collapse__content__slide">
          <div className="Collapse__content__inner">{content}</div>
        </div>
      </div>
    </div>
  );
}

export default Collapse;
