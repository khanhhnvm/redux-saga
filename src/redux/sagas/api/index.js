import axios from "axios";
export const baseUrl = 'https://my-json-server.typicode.com/hnkhanh/spa-db/'

export const getRequest = endpoint => axios.get(baseUrl + endpoint)

export const postComment = (dishId, rating, author, comment) => {
  const newComment = {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment
  };
  newComment.date = new Date().toISOString();
  return axios.post( baseUrl + 'comments', newComment)
}
