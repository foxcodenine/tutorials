
import { ref } from 'vue';

function useAlert(startingVisibility = false) {
    const alertIsVisible = ref(startingVisibility);

    function showAlert() {
      alertIsVisible.value = true;
    }
    function hideAlert() {
      alertIsVisible.value = false;
    }

    return {
      alertIsVisible,
      showAlert,
      hideAlert,
    };
}

export default useAlert;