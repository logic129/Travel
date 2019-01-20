/**
 * Created by john on 2019/1/20.
 */
export default {
  changeCity(state,city){
    state.city=city
    try{
      localStorage.city=city
    } catch (e) {}
  }
}

