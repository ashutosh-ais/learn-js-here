import ApiResponse from "../utils/api-response.js";

const healthCheck = (req, res) => {
  try {
    res
      .status(200)
      .json(new ApiResponse(200, { message: "Server is running" }));
  } catch (error) {}
};

const healthCheckInstagram = (req, res) => {
  try {
    res
      .status(200)
      .json(
        new ApiResponse(200, { message: "Server is running :: instagram" }),
      );
  } catch (error) {}
};

export { healthCheck, healthCheckInstagram };
