var typewriter = require('node-typewriter');

function type(text)
{
	typewriter(text, text.length * 20, false, () => {})
}

module.exports = {
	type: type
}