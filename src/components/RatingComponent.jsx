import { useState } from 'react';
import VotingButton from './VotingButton';
import VoteAgain from './VoteAgain';
import { useOutsideClick } from '../hooks/useClickOutside';
import '../styling/RatingComponent.css';

function RatingComponent() {
  const [rating, setRating] = useState(null);
  const [submit, setSubmit] = useState(false);
  const votes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const maxVotes = votes[votes.length - 1];

  const handleClick = (event) => {
    setRating(event.target.value);
  };

  const handleClickOutside = () => {
    setRating(null);
  };

  const ref = useOutsideClick(handleClickOutside);

  return (
    <>
      {submit ? (
        <VoteAgain
          onClick={() => {
            setRating(null);
            setSubmit(false);
          }}
          text={
            rating != null
              ? `You voted ${rating} out of ${maxVotes}`
              : "You haven't voted yet"
          }
        >
          Vote again
        </VoteAgain>
      ) : (
        <div className="main-container">
          <div ref={ref} className="voting-buttons-container">
            {votes.map((vote) => {
              return (
                <VotingButton key={vote} value={vote} onClick={handleClick}>
                  {vote}
                </VotingButton>
              );
            })}
          </div>
          <div>
            <button
              disabled={rating === null}
              title="You have to vote to submit"
              className="voting-button"
              onClick={() => setSubmit(true)}
            >
              Vote
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default RatingComponent;
