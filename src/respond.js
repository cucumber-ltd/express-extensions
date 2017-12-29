module.exports = (result, res) => {
  if (result) {
    res.setHeader('Content-Type', 'application/json')
    res.status(200).end(JSON.stringify(result))
  } else {
    res.status(404).end()
  }
}
