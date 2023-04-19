import { ref, computed, watch } from "vue";

export default function useSearch(items, searchProp) {
  const enteredSearchTerm = ref("");
  const activeSearchTerm = ref("");

  const availableItems = computed(() => {
    let users = [];
    if (activeSearchTerm.value) {
      users = items.value.filter((usr) =>
        usr[searchProp].includes(activeSearchTerm.value)
      );
    } else if (items.value) {
      users = items.value;
    }
    return users;
  });

  function updateSearch(val) {
    enteredSearchTerm.value = val;
  }
  watch(enteredSearchTerm, function (val) {
    setTimeout(() => {
      if (val === enteredSearchTerm.value) {
        activeSearchTerm.value = val;
      }
    }, 300);
  });

  return {
    enteredSearchTerm,
    availableItems,
    updateSearch,
  };
}
