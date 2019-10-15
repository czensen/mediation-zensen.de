import React from 'react';
import config from '../../config';
export default function SideFooter() {
  return (
    <footer>
      <ul className="items">
        {config.emailId && (
          <li>
            <h3>Email</h3>
            <a href={`mailto:${config.emailId}`}>{config.emailId}</a>
          </li>
        )}
        {config.phone && (
          <li>
            <h3>Telefon</h3>
            <span>{config.phone}</span>
          </li>
        )}
        {config.address && (
          <li>
            <h3>Adresse</h3>
            <span>{config.address}</span>
          </li>
        )}

    
      </ul>
    </footer>
  );
}
