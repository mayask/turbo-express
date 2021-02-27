function createController() {
  function index(req, res) {
    res.render('stock/index', {
      layout: 'main',
    })
  }

  return {
    index,
  }
}

module.exports = createController
