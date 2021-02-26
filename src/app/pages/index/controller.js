function createController() {
  function index(req, res) {
    res.render('index/home_page', {
      layout: 'main',
    })
  }

  return {
    index,
  }
}

module.exports = createController
