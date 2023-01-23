import { useQuery } from "react-query";
import axios from "axios";

const fetchPostData = async (pageparam = 1) => {
  return await axios.get(`http://blogpost.test/wp-json/wp/v2/posts?page=${pageparam}`);
};

const FetchPostData = (onSuccess, onError) => {
  return useQuery("key",() => fetchPostData());
};

export default FetchPostData