import { Schema, model, Types } from "mongoose";
import { IProgram } from "src/interfaces/program.interface";

export const ProgramSchema = new Schema({
  folio: {
    type: String,
    unique: [true, "folio must be unique"],
    required: [true, "folio is requiered"]
  },
  name: { type: String, default: null },
  description: { type: String, default: null },
  avatarUrl: { type: String, default: null },
  email: { type: String, default: null },
  subjects: [{ type: Schema.Types.ObjectId, ref: "subject" }],
  school: { type: Schema.Types.ObjectId, ref: "school" },
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: Date.now() }
});

ProgramSchema.pre("remove", function(next) {
  let document: IProgram = this;

  return model("school")
    .updateMany(
      { programs: Types.ObjectId(document._id) },
      {
        $pull: {
          programs: Types.ObjectId(document._id)
        }
      }
    )
    .then(() => {
      return next();
    });
});
