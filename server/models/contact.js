import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name: { type: 'String', required: true },
  phone: { type: 'Number', required: true },
  email: { type: 'String', required: true },
  inquiry: { type: 'String', required: true },
  slug: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  createdAt: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Contact', contactSchema);
