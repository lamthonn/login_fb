<template>
  <div id="app">
    <h3 v-if="user">user: {{ user }}</h3>

    <div id="logout" v-if="isSignIn">
      <button @click="handleLogout">Logout</button>
    </div>

    <div id="login" v-if="!isSignIn">
      <button @click="handleLogin">login with facebook</button>
    </div>
  </div>
</template>
<!-- npm install firebase -->
<script>
import firebaseConfig from './firebaseConfig.js'
import { getAuth, signInWithPopup, FacebookAuthProvider, signOut} from 'firebase/auth';
firebaseConfig
const provider = new FacebookAuthProvider();
const auth = getAuth();
export default {
  name: "App",
  data(){
    return{
      user:'',
      isSignIn: false,
    }
  },
  methods: {
    handleLogin(){
      signInWithPopup(auth,provider)
      .then((result) =>{
        console.log(result);
        console.log("user", result.user);
        this.user = result.user.displayName;
        this.isSignIn = true;
      })
      .catch((error) => {
        console.log(error);
      })
    },

    handleLogout(){
      signOut(auth)
      .then(()=> {
        this.user = '';
        this.isSignIn = false;
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  }
}
</script>
<style>

</style>