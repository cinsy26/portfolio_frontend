import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const createActivity = async (activityData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/addactivity`,
      activityData
    );
    return response.data; // 성공 시 반환된 데이터를 리턴
  } catch (error) {
    console.error("Failed to create activity:", error);
    throw error; // 에러를 상위에서 처리하도록 던짐
  }
};

// 활동 데이터 가져오기 (GET 요청)
export const fetchActivities = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/fetchactivity`);
    return response.data; // 성공 시 데이터 반환
  } catch (error) {
    console.error("Failed to fetch activities:", error);
    throw error;
  }
};
