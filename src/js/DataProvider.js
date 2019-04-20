import axios from "axios";
export const url= "http://alexandria-lib-back.herokuapp.com/";
export async function getAllCategories(name){
   // console.log('entre');
    const {data:posts}= await axios.get(url+name);
  return posts;

}
export async function getCategoryByName(name){
   // console.log('entre aqui');
    const {data:posts}= await axios.get("http://alexandria-lib-back.herokuapp.com/categories/"+name);
    //console.log("holi");
  return posts;

}
export async function getArticleFromCategory(category,title){
 
  const {data:posts}= await axios.get("http://alexandria-lib-back.herokuapp.com/categories/"+category+"/articles/"+title);

return posts;

}
export async function getAllCommentsByArticle(title){
  const {data:posts}= await axios.get("https://alexandria-lib-back.herokuapp.com/categories/Sort/articles/Quick/comments");
  return posts;

}
export async function postCommentInArticle(){
  
  axios.post('https://alexandria-lib-back.herokuapp.com/categories/Sort/articles/Quick/comments', {
    author: {"id":"5cba6fbc9d93ea0004d2bd2e","username":"admin","email":null,"name":null,"lastName":null},
    content: 'Flintstone',
    date:["1","1","1","1","1","1"],
    likes:[]
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}