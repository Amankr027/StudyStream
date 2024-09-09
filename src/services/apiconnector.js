import axios from "axios";

// Create axios instance with a base URL (you can configure this in your .env file)
export const axiosInstance = axios.create({});

// Updated `apiConnector` with default headers
export const apiConnector = async (method, url, bodyData, headers, params) => {
  console.log(`Method: ${method}, URL: ${url}, Data:`, bodyData, 'Headers:', headers);

  try {
    const response = await axiosInstance({
      method: method,
      url: url,
      data: bodyData ? bodyData : null,
      headers: headers ? headers : { 'Content-Type': 'application/json' },  // Default Content-Type
      params: params ? params : null,
    });

    console.log("API Response:", response);
    return response;

  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
