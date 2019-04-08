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
  //console.log(category);console.log(title);
  const {data:posts}= await axios.get("http://alexandria-lib-back.herokuapp.com/categories/"+category+"/articles/"+title);
  //console.log("holi");
return posts;

}