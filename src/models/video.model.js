import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new mongoose.Schema(
  {
    videoFile: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    Owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    title: {
      type: String,
      required: true,
    },
    duration : {
        type : Number,
        required : true,
    },

    views :{
        type : Number,
        default : 0,
    },
    isPublished : {
        type : Boolean,
        default : true,

    },

  },
  { timestamps: true },
);

videoSchema.plugin(mongooseAggregatePaginate);

export const video = mongoose.model("video", videoSchema);
