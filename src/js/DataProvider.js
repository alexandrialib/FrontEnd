import axios from "axios";
axios.defaults.baseURL = "https://alexandria-lib-back.herokuapp.com";
export async function getAllCategories(name){
   // console.log('entre');
    const {data:posts}= await axios.get(url+name);
  return posts;

}
export async function getCategoryByName(name){
   // console.log('entre aqui');
    const {data:posts}= await axios.get("/categories/"+name);
    //console.log("holi");
  return posts;

}
export async function getArticleFromCategory(category,title){
 
  const {data:posts}= await axios.get("/categories/"+category+"/articles/"+title);

return posts;

}
export async function getAllCommentsByArticle(title){
  const {data:posts}= await axios.get("/categories/Sort/articles/Quick/comments");
  return posts;

}
export async function postCommentInArticle(user,comment,success,fail){
  axios({
    method: "post",
    url: "/categories/Sort/articles/Quick/comments",
    auth: user,
    data: comment

  })
  .then(success())
  .catch(fail());
}
export async function getArticleFromCategory(category, title) {
  //console.log(category);console.log(title);
  const { data: posts } = await axios.get(
    "/categories/" + category + "/articles/" + title
  );
  //console.log("holi");
  return posts;
}

export function postUser(user, success, fail) {
  // console.log(user)
  axios
    .post("/users", user)
    .then(success())
    .catch(fail());
}

export function getUser(user, success, fail) {
  // console.log(user);
  axios({
    method: "get",
    url: "/user",
    auth: user
  })
    .then(success)
    .catch(fail);
}