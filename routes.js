const express = require('express')
const router = express.Router()

router.get('/:id', async(req, res) => {
	let id = req.params.id
	console.log(id)
	res.render('index', {
		id: id,
	})
})

module.exports = router
