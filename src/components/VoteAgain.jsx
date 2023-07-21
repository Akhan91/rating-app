function VoteAgain({ children, onClick, text }) {
  return (
    <div className="main-container">
      <h3 className="not-voted-text">{text}</h3>
      <button className="voting-button" onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

export default VoteAgain;
