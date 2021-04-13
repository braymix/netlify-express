module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      nome: String,
      foto: String,
      descrizione: String,
      tipo: String,
      giacenza: Number,
      prezzo: Number,
      sconto: Number,
      visibile: Boolean,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("tutorial", schema);
  return Tutorial;
};
