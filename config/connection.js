const mongoose = require("mongoose");

module.exports = {
  start: async () => {
    const url = "";
    await mongoose.connect(url, {
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await mongoose.set("debug", true);
    return mongoose;
  },
};
