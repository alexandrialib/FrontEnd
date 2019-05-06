import axios from "axios";
export var URL = "https://alexandria-lib-back.herokuapp.com";
URL = "http://localhost:8080";
axios.defaults.baseURL = URL;


export async function getAllCategories(name){
   // console.log('entre');
   const { data: posts } = await axios.get(
    "/" +name
  );
  return posts;

}
export async function getCategoryByName(name){
   // console.log('entre aqui');
    const {data:posts}= await axios.get("/categories/"+name);
    //console.log("holi");
  return posts;

}

export async function getAllCommentsByArticle(url){
  console.log("estoy en data provider")
  console.log(url)
  const {data:posts}= await axios.get(url+"/comments");
  
  return posts;

}
export  function postCommentInArticle(comment,url){
  axios({
    method: "post",
    url: "/categories/"+url+"/comments",
    auth: {"username":"admin","password":"admin"},
    data: comment

  })

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