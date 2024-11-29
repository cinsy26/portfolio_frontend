import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const createActivity = async (activityData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/activity`, activityData);
    return response.data; // 성공 시 반환된 데이터를 리턴
  } catch (error) {
    console.error("Failed to create activity:", error);
    throw error; // 에러를 상위에서 처리하도록 던짐
  }
};
