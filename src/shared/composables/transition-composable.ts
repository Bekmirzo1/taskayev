
const transitionState = ref({
  transitionComplete: false,
});

export const useTransitionComposable = () => {
  const toggleTransitionComplete = (value) => {
    transitionState.value.transitionComplete = value;
  };

  return {
    transitionState: transitionState.value,
    toggleTransitionComplete,
  };
};