import { ref } from "vue";

export default function useAlert(trues) {
  const alertIsVisible = ref(trues);

  function showAlert() {
    alertIsVisible.value = true;
  }
  function hideAlert() {
    alertIsVisible.value = false;
  }

  return [alertIsVisible, showAlert, hideAlert];
}
