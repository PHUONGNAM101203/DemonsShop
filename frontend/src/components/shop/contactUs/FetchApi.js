import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL;

export const notifyEvent = async (email) => {
  try {
    let res = await axios.post(`${apiURL}/api/customize/notifyEvent`, {
      email,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
