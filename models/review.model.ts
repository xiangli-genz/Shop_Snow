import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  userId: String,
  orderId: String,
  orderItemId: String,
  productId: String,
  variant: String,
  rating: Number,
  comment: String,
  images: [String],
  deleted: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

const Review = mongoose.model('Review', schema, 'reviews');
export default Review;
