import RatingComponent from '../components/RatingComponent';
import '../App.css';
import './ratingPage.css';

function RatingPage() {
  return (
    <div className="rating-page-wrapper">
      <h1 className="title">Give us a rating</h1>
      <RatingComponent />
    </div>
  );
}

export default RatingPage;
