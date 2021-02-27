function createController() {
  function index(req, res) {
    res.render('live/index', {
      layout: 'main',
    })
  }

  return {
    index,
  }
}

module.exports = createController
