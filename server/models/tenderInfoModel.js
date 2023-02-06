//Require Mongoose
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const TenderInfoSchema = mongoose.Schema({
  _id: Number,
    name:{
    type: String,
    required: [true,"title is required"],
    lowercase: true,
    trim: true
  },
    email: {
      type: String,
      required: [true,"Username is required"],
      lowercase: true,
      trim: true
    },
    mobile: {
      type: String,
      required: [true,"Mobile is required"],
      maxlength: 10,
      minlength:10,
      trim: true
    },
    address: {
    type: String,
    required: [true,"Address is required"],
    trim: true
  },
    city: {
    type: String,
    required: [true,"City is required"],
    trim: true
  },
    typeofApplicant: {
    type: String,
    required: [true,"typeofApplicant is required"],
  },
    title: {
    type: String,
    required: [true,"title is required"],
    lowercase: true,
    trim: true,
  },
    subcatnm: {
      type: String,
      required: [true,"SubCategory is required"],
      lowercase: true,
      trim: true
    },
    enddate: {
    type: String,
    required: [true,"End Date is required"],
    trim: true
  },
  info: String
});

// Apply the uniqueValidator plugin to RegisterSchema.
TenderInfoSchema.plugin(uniqueValidator);

// compile schema to model
const TenderInfoSchemaModel = mongoose.model('tenderinfodetails', TenderInfoSchema );

export default TenderInfoSchemaModel;