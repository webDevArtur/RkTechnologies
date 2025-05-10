import axios from "axios";

export const fetchCat = async (): Promise<string> => {
  const res = await axios.get("https://api.thecatapi.com/v1/images/search");
  return res.data[0]?.url;
};
