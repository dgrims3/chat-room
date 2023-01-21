
import { ref } from 'vue';
import { projectAuth } from '../firebase/config';

const error = ref(null);

const login = async (email, password) => {
    error.value = null

    try {
        const ref = await projectAuth.signInWithEmailAndPassword(email, password);
        error.value = null;
        console.log(res);
        return res
    } catch (error) {
        console.log(error.value);
        error.value = "Incorrect login credentials";
    }
}

const useLogin = ()=> {
    return{error, login}
}

export default useLogin