'use strict';

(function () {
  var searchHotelBtn = document.querySelector(".search-hotel__btn");
  if (!searchHotelBtn) {
    return;
  }
  var popupAnchor = document.querySelector('.search-hotel__anchor-popup');
  var popup = popupAnchor.children[0];
  var isTransition = false;
  var isPopupOpen = false;
  var isFirstEvent = true;

  var openAnimationEnd = function () {
    if (isFirstEvent) {
      isFirstEvent = false;
      return;
    }
    isTransition = false;
    popup.removeEventListener('transitionend', openAnimationEnd);
    isPopupOpen = true;
    isFirstEvent = true;
  };

  var closeAnimationEnd = function () {
    if (isFirstEvent) {
      isFirstEvent = false;
      return;
    }
    isTransition = false;
    popup.removeEventListener('transitionend', closeAnimationEnd);
    popupAnchor.classList.add('hide-popup');
    isPopupOpen = false;
    isFirstEvent = true;
  };

  var onSearchHotelBtnClick = function (evt) {
    if (isTransition) {
      evt.stopPropagation();
      return;
    }
    isTransition = true;
    if (isPopupOpen) {
      popup.addEventListener('transitionend', closeAnimationEnd);
    } else {
      popupAnchor.classList.remove('hide-popup');
      popup.addEventListener('transitionend', openAnimationEnd);
    }
    setTimeout(function () {
      popupAnchor.classList.toggle('slim-up-popup');
    }, 50);
  };

  popupAnchor.classList.add('hide-popup');
  popupAnchor.classList.toggle('slim-up-popup');
  searchHotelBtn.addEventListener('click', onSearchHotelBtnClick);
})();
