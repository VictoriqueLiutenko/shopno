document.addEventListener('DOMContentLoaded', function() {
  let knowMoreArray = document.getElementsByClassName("js-knowMoreButton");

  for (let i = 0; i < knowMoreArray.length; i++) {
    knowMoreArray[i].onclick = function knowMore() {
      let infoBlock = this.closest(".js-infoBlock");
      let bg = infoBlock.querySelector(".ourServicesTile-transparentColorBlock--gray");
      let infoWrap = infoBlock.querySelector(".ourServicesTile-infoWrapper");
      let cross = infoBlock.querySelector(".ourServicesTile-buttonImage--cross");
      let smallText = infoBlock.querySelector(".js-smallText");
      let fullText = infoBlock.querySelector(".js-fullText");

      addClass(this, "helpers-displayNone");
      addClass(infoWrap, "ourServicesTile-infoWrapper--cyan");
      removeClass(cross, "helpers-displayNone");
      removeClass(bg, "ourServicesTile-transparentColorBlock--gray");
      addClass(bg, "ourServicesTile-transparentColorBlock--cyan");
      addClass(smallText, "helpers-displayNone");
      removeClass(fullText, "helpers-displayNone");
    }
  }

  let crossArray = document.getElementsByClassName("js-crossButton");

  for (let i = 0; i < crossArray.length; i++) {
    crossArray[i].onclick = function() {
      let infoBlock = this.closest(".js-infoBlock");
      let bg = infoBlock.querySelector(".ourServicesTile-transparentColorBlock--cyan");
      let infoWrap = infoBlock.querySelector(".ourServicesTile-infoWrapper");
      let knowMore = infoBlock.querySelector(".ourServicesTile-buttonImage--know-more");
      let smallText = infoBlock.querySelector(".js-smallText");
      let fullText = infoBlock.querySelector(".js-fullText");

      addClass(this, "helpers-displayNone");
      removeClass(infoWrap, "ourServicesTile-infoWrapper--cyan");
      removeClass(knowMore, "helpers-displayNone");
      addClass(bg, "ourServicesTile-transparentColorBlock--gray");
      removeClass(bg, "ourServicesTile-transparentColorBlock--cyan");
      removeClass(smallText, "helpers-displayNone");
      addClass(fullText, "helpers-displayNone");
    }
  }
})