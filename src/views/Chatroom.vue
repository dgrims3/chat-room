<template>
  <div class="container">
    <Navbar/>
    <ChatWindow/>
    <newChatForm/>
  </div>
</template>

<script>
import newChatForm from '@/components/newChatForm.vue';
import ChatWindow from '@/components/ChatWindow.vue';
import Navbar from '@/components/Navbar.vue';
import getUser from '../composables/getUser';
import { watch } from 'vue';
import { useRouter } from 'vue-router';

export default {
    components: {Navbar, newChatForm, ChatWindow},

    setup() {
    const router = useRouter()
    const { user } = getUser()

    watch(user, () => {
      if (!user.value) {
        router.push({ name: 'Welcome' })
      }
    })
  }
}
</script>

<style>

</style>