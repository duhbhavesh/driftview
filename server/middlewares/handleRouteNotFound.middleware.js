const handleRouteNotFound = (req, res, next) => {
   return res
      .status(404)
      .json({ success: false, message: '404 Route not found' });
};

module.exports = { handleRouteNotFound };
