function createController() {
  function index(req, res) {
    res.render('index/index', {
      layout: 'main',
    })
  }

  return {
    index,
  }
}

module.exports = createController
