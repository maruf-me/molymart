'use client';
import { Rating as ReactRating } from 'react-simple-star-rating';

type MyRatingProps = {
  rating: number
  readonly?: boolean
  iconsCount?: number
  starClasses?: string
  setRating?: (rate: number) => void
}

const MyRating = ({ rating = 0, setRating, readonly, starClasses, iconsCount = 5, }: MyRatingProps) => {
  const handleRating = (rate: number) => setRating ? setRating(rate) : null


  return (
    <div className='inline-flex items-center gap-space6'>
      <ReactRating
        transition
        allowFraction
        readonly={readonly}
        initialValue={rating}
        onClick={handleRating}
        iconsCount={iconsCount}
        SVGclassName={`w-4 h-4 inline ${starClasses}`} /* Optional */
      />
    </div>
  )
}

export default MyRating