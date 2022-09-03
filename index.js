const onAssetsSuccess = new CustomEvent("assetsSuccess", {});

const main = () => {
  const assets = {
    "icon-twitter": "./assets/twitter.svg",
    "icon-twitch": "./assets/twitch.svg",
    "icon-instagram": "./assets/instagram.svg",
    "icon-linkedin": "./assets/linkedin.svg",
    "icon-github": "./assets/github.svg",
  };

  addEventListener("assetsSuccess", () => {
    for (const ID in assets) {
      const asset = assets[ID];

      toIcon(ID, `${asset}`);

      const separators = document.getElementsByClassName("separator");
      for (const separator of separators) {
        separator.classList.add("disabled");
      }
    }
  });

  requestAllInTarget(assets, () => {
    dispatchEvent(onAssetsSuccess);
  });
};

const requestAllInTarget = (target, onSuccessOfAll) => {
  let requestSucessCount = 0;

  for (const key in target) {
    const asset = target[key];

    const requestSucess = () => {
      if (++requestSucessCount === Object.keys(target).length) {
        onSuccessOfAll();
      }
    };

    requestAsset(asset, requestSucess);
  }
};

const requestAsset = (asset, onSuccess, onFailure) => {
  const request = new XMLHttpRequest();

  request.addEventListener("load", () => {
    if (request.status === 200) {
      onSuccess();
    } else {
      onFailure();
    }
  });

  request.open("GET", asset, true);
  request.send(null);
};

const toIcon = (ID, iconPath) => {
  document.getElementById(ID).style.content = `url("${iconPath}")`;
};

const disable = (element) => {
  element.classList.add("disabled");
};

main();
