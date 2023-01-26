module.exports.index = (request, response) => {
	response.json({
		message: 'Hello World',
	});
};

module.exports.createPerson = (request, response) => {
	const {firstName, lastName} = request.body
}