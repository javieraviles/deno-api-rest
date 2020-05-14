export default ({ response }) => {
	response.status = 404;
	response.body = { msg: "Resource Not Found" };
};
