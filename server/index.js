require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { initializeDBConnection } = require('./db/db.connect');
const { PopulateVideos } = require('./models/video');
const videosRouter = require('./routes/videos');
const videosLikedRouter = require('./routes/liked');
const videosWatchLaterRouter = require('./routes/watchLater');
const videosHistoryRouter = require('./routes/history');
const videosPlaylistRouter = require('./routes/playlist');

const { errorHandler } = require('./middlewares/error-handler');
const { routeNotFound } = require('./middlewares/route-not-found');

const app = express();

app.use(bodyParser.json());
app.use(cors());

initializeDBConnection();
// PopulateVideos()

app.get('/', (req, res) => {
   res.json({ success: true, message: 'Driftview - API' });
});

app.use('/videos', videosRouter);
app.use('/liked', videosLikedRouter);
app.use('/watchlater', videosWatchLaterRouter);
app.use('/history', videosHistoryRouter);
app.use('/playlist', videosPlaylistRouter);

app.use(routeNotFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
   console.log(`Server Listening on PORT ${PORT}`);
});
