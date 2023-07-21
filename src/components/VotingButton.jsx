import '../styling/ratingComponent.css';

function VotingButton({ children, onClick, value }) {
  return (
    <>
      <button className="rating-numbers" onClick={onClick} value={value}>
        {children}
      </button>
    </>
  );
}

export default VotingButton;
