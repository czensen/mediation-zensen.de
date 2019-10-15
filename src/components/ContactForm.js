import React from 'react';
export default function ContactForm() {
  return (
    <>
      <header>
        <h2>Kontakt aufnehmen</h2>
      </header>
      <div className="content">
        <p>
          <strong>Ich freue, mich von Ihnen zu hören.</strong> Schreiben Sie mir unten eine Nachricht und 
          ich melde mich so bald wie möglich zurück. Alternativ schreiben Sie mir eine E-Mail oder rufen Sie einach an.
        </p>
        <form>
          <div className="fields">
            <div className="field half">
              <input type="text" name="name" id="name" placeholder="Ihr Name" />
            </div>
            <div className="field half">
              <input type="email" name="email" id="email" placeholder="Ihre Email" />
            </div>
            <div className="field">
              <textarea
                name="message"
                id="message"
                placeholder="Ihre Nachricht an mich"
                rows="7"
              />
            </div>
          </div>
          <ul className="actions">
            <li>
              <input
                type="submit"
                value="Nachricht senden"
                className="button primary"
              />
            </li>
          </ul>
        </form>
      </div>
    </>
  );
}
