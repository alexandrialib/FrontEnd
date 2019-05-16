import axios from "axios";
import { func } from "prop-types";
export var URL = "https://alexandria-lib-back.herokuapp.com";
URL = "http://localhost:8080";
axios.defaults.baseURL = URL;


export async function getAllCategories(name){
 ;
   const { data: posts } = await axios.get(
    "/" +name
  );
  return posts;

}
export async function getCategoryByName(name){
 
    const {data:posts}= await axios.get("/categories/"+name);
 
  return posts;

}
export async function getUserbyUsername(username,password){
  const {data:post}=await axios({
    method: "get",
    url: "/user",
    auth: {"username":username,"password":password},


  })
  return post;

}

export async function getAllCommentsByArticle(url){

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
  
  const { data: posts } = await axios.get(
    "/categories/" + category + "/articles/" + title
  );

  return posts;
}

export function postUser(user, success, fail) {

  axios
    .post("/users", user)
    .then(success())
    .catch(fail());
}

export async function getUser(user, success, fail) {
  
  return await axios({
    method: "get",
    url: "/user",
    auth: user
  })
    .then(success)
    .catch(fail);
    
}
export function postCategory(name,user){ 
  axios({
    method:"post",
    url:"/categories",
    auth: {"username":"admin","password":"admin"},
    data: {"name":name}
  })
}
export function postArticle(category,article){
  axios({
    method:"post",
    url:"/categories/"+category+"/articles",
    auth: {"username":"admin","password":"admin"},
    data: article
  })


}