//Require Mongoose
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const SubCategorySchema = mongoose.Schema({
  _id: Number,
  catnm: {
    type: String,
    required: [true,"Category is required"],
    lowercase: true,
    trim: true,
  },
  subcatnm: {
    type: String,
    required: [true,"SubCategory is required"],
    unique: true,
    lowercase: true,
    trim: true,
  },
  subcaticonnm: {
    type: String,
    required: [true,"SubCategory icon is required"],
    trim: true
  }
});

// Apply the uniqueValidator plugin to RegisterSchema.
SubCategorySchema.plugin(uniqueValidator);

// compile schema to model
const SubCategorySchemaModel = mongoose.model('subcategory', SubCategorySchema );

export default SubCategorySchemaModel