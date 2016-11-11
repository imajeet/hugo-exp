import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const analyzedSchema = new Schema({
  twitter: { type: 'Object', required: true },
  name: { type: 'String', required: true },
  sentiments: { type: 'Object', required: true },
  watsonKeywords: { type: 'Object', required: true },
  topTenWords: { type: 'Object', required: true },
  createdAt: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Analyzed', analyzedSchema);
