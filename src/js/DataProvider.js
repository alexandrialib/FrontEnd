import axios from "axios";
export const url= "http://alexandria-lib-back.herokuapp.com/";
export async function getAllCategories(name){
    console.log('entre');
    const {data:posts}= await axios.get(url+name);
  return posts;

}
export async function getCategoryByName(name){
    console.log('entre');
    const {data:posts}= await axios.get(url+"/categories/"+name).then(res=>res.title);
  return posts;

}