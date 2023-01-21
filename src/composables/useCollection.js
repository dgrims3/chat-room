import { ref } from 'vue';
import { projectFirestore  } from '@/firebase/config';

const useCollection = (collection) => {
    let error = ref(null)

    const addDoc = async (doc) => {
        error.value = null;

        try {
            await projectFirestore.collection(collection).add(doc)
        } catch (error) {
            console.log(error.message)
            error.value = "Cannot send message"
        }
    }
    return { error, addDoc }
}

export default useCollection