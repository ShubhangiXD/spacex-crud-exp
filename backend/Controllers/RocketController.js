const { getRocketsModel } = require("../Models/RocketModel");
const getRockets = async (request, response) => {
    try {
        const rockets = await getRocketsModel();
        if (!!rockets && rockets.length === 0 && Array.isArray(rockets)) {
            const emptyRockets = {
                data: [],
                total: 0,
                message: "No data available.",
                status: 400,
            };
            response.status(400).json(emptyRockets);
        } else {
            const successResponse = {
                data: rockets,
                total: rockets.length,
                message: "success",
                status: 200,
            };
            console.log(successResponse);
            response.status(200).json(successResponse);
        }
    } catch (error) {
        const errorResponse = {
            data: [],
            total: 0,
            message: error.message,
            status: 500,
        };
        response.status(500).json(errorResponse);
        console.error(error.message);
    }
};
module.exports = { getRockets };
/* getRockets(); */