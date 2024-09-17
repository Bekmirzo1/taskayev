import type { MediaElem } from "./types";

export const mediasObj = {
  minWidth: 375,
  mobSmall: 480.98,
  mob: 767.98,
  tablet: 965.98,
  laptop: 1365.98,
  pc: 1920,
  max: 5000,
} as const;

export const mediasArray = [] as MediaElem[];
for (const key in mediasObj) {
  if (Object.prototype.hasOwnProperty.call(mediasObj, key)) {
    const element = mediasObj[key as keyof typeof mediasObj];
    if (mediasArray.length == 0) {
      mediasArray.push({ name: String(key), value: element, matches: false });
    } else {
      for (let index = 0; index < mediasArray.length; index++) {
        const elem = mediasArray[index];
        if (elem.value < element) {
          if (mediasArray.length > index + 1) {
            continue;
          }
          mediasArray.splice(index + 1, 0, {
            name: String(key),
            value: element,
            matches: false,
          });
          break;
        } else if (elem.value > element) {
          mediasArray.splice(index, 0, {
            name: String(key),
            value: element,
            matches: false,
          });
          break;
        }
      }
    }
  }
}
mediasArray[mediasArray.length - 1].matches = true;

export function mediaChange(mediaElem: MediaElem) {
  const Media = window.matchMedia(`(max-width: ${mediaElem.value / 16}em)`);
  function init(media: MediaQueryListEvent | MediaQueryList) {
    if (media.matches) {
      mediaElem.matches = true;
    } else if (!media.matches) {
      mediaElem.matches = false;
    }
  }
  Media.addEventListener("change", (media) => {
    init(media);
  });
  init(Media);
}
