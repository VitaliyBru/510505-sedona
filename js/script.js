'use strict';

(function () {
  var searchHotelBtn = document.querySelector(".search-hotel__btn");
  if (!searchHotelBtn) {
    return;
  }
  var popupAnchor = document.querySelector('.search-hotel__anchor-popup');
  var popup = popupAnchor.children[0];
  var debounceFlag = false;
  var toggleAction = null;

  var openAnimationEnd = function () {
    debounceFlag = false;
    popup.removeEventListener('transitionend', toggleAction);
  };

  var closeAnimationEnd = function () {
    debounceFlag = false;
    popup.removeEventListener('transitionend', toggleAction);
    popupAnchor.classList.add('hide-popup');
  };

  var onSearchHotelBtnClick = function (evt) {
    if (debounceFlag) {
      evt.stopPropagation();
      return;
    }
    debounceFlag = true;
    if (toggleAction === openAnimationEnd) {
      toggleAction = closeAnimationEnd;
    } else {
      popupAnchor.classList.remove('hide-popup');
      toggleAction = openAnimationEnd;
    }
    popup.addEventListener('transitionend', toggleAction);
    setTimeout(function () {
      popupAnchor.classList.toggle('slim-up-popup');
    }, 1);
  };

  popupAnchor.classList.add('hide-popup');
  popupAnchor.classList.toggle('slim-up-popup');
  searchHotelBtn.addEventListener('click', onSearchHotelBtnClick);
})();
