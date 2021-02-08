module.exports = mongoose => {
  const Color = mongoose.model(
    "color",
    mongoose.Schema(
      {
        _id:{ type: Number, default: 0 },
        wall_main: String,
        wall_bar: String,
        curtain_primary: String,
        curtain_secondary: String,
        curtain_bar: String,
        sofa_primary: String,
        sofa_secondary: String,
        floor: String,
      }
    )
  );

  return Color;
};