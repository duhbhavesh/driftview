const mongoose = require('mongoose');
const toJson = require('@meanie/mongoose-to-json');
mongoose.plugin(toJson);

const initializeDBConnection = async () => {
   try {
      const connectionStatus = await mongoose.connect(process.env.MONGO_URL, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
         useFindAndModify: false,
      });

      if (connectionStatus) {
         console.log('DB Connection Established');
      }
   } catch (err) {
      console.log('DB Connection Failed', err);
   }
};

module.exports = { initializeDBConnection };
