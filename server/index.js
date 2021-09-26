require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { initializeDBConnection } = require('./db/db.connect');
const authRouter = require('./routes/auth.router');
const userRouter = require('./routes/user.router');
const videosRouter = require('./routes/videos.router');
const videosLikedRouter = require('./routes/liked.router');
const videosWatchLaterRouter = require('./routes/watchLater.router');
const videosHistoryRouter = require('./routes/history.router');
const videosPlaylistRouter = require('./routes/playlist.router');
const { PopulateVideos } = require('./models/video.model');

const { handleError } = require('./middlewares/handleError.middleware');
const {
   handleRouteNotFound,
} = require('./middlewares/handleRouteNotFound.middleware');

const app = express();

app.use(bodyParser.json());
app.use(cors());

initializeDBConnection();
// PopulateVideos()

app.get('/', (req, res) => {
   res.json({ success: true, message: 'Driftview - API' });
});
app.use('/api', videosRouter);

app.use('/api', authRouter);

app.use('/api', userRouter);
app.use('/api', videosLikedRouter);
app.use('/api', videosWatchLaterRouter);
app.use('/api', videosHistoryRouter);
app.use('/api', videosPlaylistRouter);

app.use(handleRouteNotFound);
app.use(handleError);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
   console.log(`Server Listening on PORT ${PORT}`);
});
