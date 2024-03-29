import ReviewForm from '../review-form/review-form';
import Review from '../review/review';

function OfferReviews() {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">1</span>
      </h2>
      <ul className="reviews__list">
        {[1, 2].map((review) => <Review key={review} />)}
      </ul>
      <ReviewForm/>
    </section>
  );
}

export default OfferReviews;
