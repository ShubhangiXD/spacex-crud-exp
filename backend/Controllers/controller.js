const getUser = (request, response) => {
    try {
        const respObj = {
            total: data.length,
            data,
            message: "Success",
            status: 200,
        };
        response.status(200).json(respObj);
    } catch(error) {
        response.status(500).json({
            total: 0,
            data: [],
            message: "Internal server error",
            status: 500,
        });
    };
}