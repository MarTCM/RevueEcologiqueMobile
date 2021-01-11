import client from "./client";

const endpoint = "/articles";
const getArticles = () => client.get(endpoint);

export default {
  getArticles,
};
