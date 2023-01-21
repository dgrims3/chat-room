<template>
  <div class="welcome container">
    <p>Welcome</p>
    <div v-if="showLogin">
      <h2>Login</h2>
      <LogInForm @login="enterChat" />
      <p>No account yet? <span @click="showLogin = false">Sign up!</span></p>
    </div>
    <div v-else>
      <h2>Sign Up</h2>
      <SignupForm @signup="enterChat"/>
      <p>Already registered? <span @click="showLogin = true"> Login</span></p>
    </div>
  </div>
</template>

<script>
import SignupForm from "@/components/SignupForm.vue";
import LogInForm from "@/components/LogInForm.vue";
import { ref } from "@vue/reactivity";
import { useRouter } from 'vue-router';

export default {
  components: { SignupForm, LogInForm },
  setup() {
    const showLogin = ref(true);
    const router = useRouter()
    const enterChat = () => {
      router.push({name: "Chatroom"})
    };
    return { showLogin, enterChat };
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}

.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px;
}
.welcome span {
  border-bottom: 1px solid;
  cursor: pointer;
}
.welcome button {
  margin: 20px auto;
  cursor: pointer;
}
</style>