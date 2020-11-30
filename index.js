const problem = require('./lib/problem')

var psing = require('workshopper-adventure')({
  appDir: __dirname,
  languages: ['en'],
  header: require('workshopper-adventure/default/header'),
  footer: require('./lib/footer.js')
})

psing.addAll(require('./menu.json').map(function (name) {
  return {
    name,
    fn: function () {
      var p = name.toLowerCase().replace(/\s/g, '-')
      var dir = require('path').join(__dirname, 'problems', p)
      return problem(dir)
    }
  }
}))

module.exports = psing
