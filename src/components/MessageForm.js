import React from "react";

const MessageForm = ({ handleSubmit, handleKeyDown, handleChange, values, errors, user }) => {
  return (
    <form onSubmit={handleSubmit} className="message-form-container">
      <div className="message-form">
        <div>
          <img
            src={user.photoURL}
            alt="profil"
            className="profil-picture"
          />
        </div>
        <textarea
          onKeyDown={handleKeyDown}
          name="message"
          value={values.message}
          onChange={handleChange}
          placeholder="Quoi de neuf ?"
        ></textarea>
      </div>
      {errors.message && <p className="error-text">{errors.message} hjg iu</p>}
      <footer>
        <p>{280 - values.message.length}</p>
        <button type="submit" disabled={values.message.length > 280 || values.message.length === 0}>Tweeter</button>
      </footer>
    </form>
  );
};

export default MessageForm;
