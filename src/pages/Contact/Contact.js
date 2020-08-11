import React, { useState } from "react";

import Form from "../../components/Form/Form";
import PopUp from "../../components/PopUp/PopUp";

const Contact = () => {
  const [isVisible, setVisible] = useState(false);

  const togglePopUp = () => setVisible(!isVisible);

  return (
    <>
      <h1>Chętnie odpowiemy na Twoje pytania!</h1>
      {isVisible ? (
        <PopUp visible={isVisible} />
      ) : (
        <Form togglePopUp={togglePopUp} />
      )}
    </>
  );
};

// Contact.displayName = "Contact Form";

export default Contact;
