const main = () => {
  document.fonts.onloadingdone = () => {
    if (isFontPresent("Social-Icons")) {
      formatIcons();
      hideSeparators();
    }
  };
};

const formatIcons = () => {
  const icons = document.getElementsByClassName("icon");
  for (const icon of icons) {
    icon.textContent = "";
    icon.style.fontSize = "2.4rem";
  }
};

const hideSeparators = () => {
  const separators = document.getElementsByClassName("separator");
  for (const separator of separators) {
    hide(separator);
  }
};

const isFontPresent = (fontFamily) => {
  return document.fonts.check(`0 ${fontFamily}`);
};

const hide = (element) => {
  element.classList.add("hidden");
};

main();
