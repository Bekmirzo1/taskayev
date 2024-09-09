import { mediaChange, mediasArray, mediasObj } from "./model";

export const MediaStore = defineStore("media-viewport", () => {
  const medias = ref(mediasArray);
  onMounted(() => {
    for (let index = 0; index < medias.value.length; index++) {
      const media = medias.value[index];
      mediaChange(media);
    }
  });

  const mediaMax = computed(() => {
    const elem = medias.value.find((mediaElem) => mediaElem.matches == true);
    return elem?.value
      ? elem.value
      : medias.value[medias.value.length - 1].value;
  });
  // const checkMedia = (val: typeof mediasObj[keyof typeof mediasObj]) => val >= mediaMax.value;
  const checkMedia = (val: keyof typeof mediasObj) =>
    mediasObj[val] >= mediaMax.value;

  return { mediaMax, checkMedia };
});
