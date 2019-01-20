/**
 * Created by john on 2019/1/20.
 */
let defaultCity="北京"
try{
  if(localStorage.city){
    defaultCity=localStorage.city
  }
} catch(e){}

export default {
  city:defaultCity
}
