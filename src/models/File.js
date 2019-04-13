const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  }
}, 
  { 
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

const port = process.env.PORT || 3001;
const url = process.env.URL || `http://localhost:${port}`;

FileSchema.virtual('url').get(function() {
  return `${url}/files/${encodeURIComponent(this.path)}`;
});

module.exports = mongoose.model('File', FileSchema);