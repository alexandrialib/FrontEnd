import axios from "axios";
export const url = "https://alexandria-lib-back.herokuapp.com/";
export async function getAllCategories(name) {
  // console.log('entre');
  const { data: posts } = await axios.get(url + name);
  return posts;
}
export async function getCategoryByName(name) {
  // console.log('entre aqui');
  const { data: posts } = await axios.get(
    url+"categories/" + name
  );
  //console.log("holi");
  return posts;
}
export async function getArticleFromCategory(category, title) {
  //console.log(category);console.log(title);
  const { data: posts } = await axios.get(
    url+"categories/" +
      category +
      "/articles/" +
      title
  );
  //console.log("holi");
  return posts;
}

export function postUser(user, success, fail) {
  axios
    .post(url + "users", user)
    .then(success())
    .catch(fail());
}