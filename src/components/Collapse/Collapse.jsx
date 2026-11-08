import { useState } from "react";
import Chevron from "/public/chevron.png";

function Collapse({ label, content, expanded = false, ...props }) {
  const [open, setOpen] = useState(expanded);

  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <div className="Collapse" {...props}>
      <button className="Collapse__toggler" onClick={handleToggle}>
        {label}
        <img src={Chevron} className={open ? "active" : ""} />
      </button>
      {open && <div className="Collapse__content">{content}</div>}
    </div>
  );
}

export default Collapse;
