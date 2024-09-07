import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "Doctor",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }//Dans le code que vous avez partagé, { timestamps: true } est une option de configuration du schéma Mongoose qui, lorsqu'elle est activée, ajoute automatiquement deux champs supplémentaires à chaque document créé à partir de ce schéma : createdAt et updatedAt. Voici une explication détaillée :
);

export default mongoose.model("Review", reviewSchema);