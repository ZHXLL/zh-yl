import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);



const state ={
	count:999,
	name:'罗文文',
	user:false
}
const mutations = {	
    add(state,n){
        state.count=n;
    },
    reduce(state){
        state.count-=1;
    }
}
const actions ={
	
}
const setters ={
	
}
const getters ={
	count:function(state){
        return state.count +=100;
    }
}   
export default new Vuex.Store({
	state,
	actions,
	mutations,
	setters,
	getters,
})