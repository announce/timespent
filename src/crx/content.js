// @flow
'use strict'
const $ = require('jquery')
const satisfactionImages = require('./image/base64')

const createLanguageSwitcherElement = () => {
  return `
    <form style="padding:2em 0;">
       <h4>Switch the language</h4>
       <select style="font-size:2em;border:1em;">
        <option value="en-us">English</option>
        <option value="ja-jp">Japanese</option>
    </select>
    </form>
  `
}

const createSatisfactionElement = () => {
  const smilesElement = satisfactionImages.map((dict: Object) => {
    return `<img
    width="40em;" src="${dict.mono}" data-src="${dict.color}"
    onmouseover="cacSwapImage(this)"
    onmouseout="cacSwapImage(this)"
  >`
  })

  return `
    <script>
    window.cacSwapImage = (target) => {
      let $t = $(target)
      let s1 = $t.attr('data-src')
      let s2 = $t.attr('src')
      $t.attr('data-src', s2)
      $t.attr('src', s1)
    }
    </script>
    <div class="ask-a-question-panel">
        <h4>This page is translated from English</h4>
        <div>${smilesElement.join('')}</div>
        <p>Let us know your satisfaction on translation!</p>
    </div>
  `
}

/**
 * https://developer.chrome.com/extensions/content_scripts
 * @param w
 * @param chrome
 */
const main = (w: Object, chrome: Object) => {
  $('.page-sidebars')
    .prepend(createLanguageSwitcherElement())
    .append(createSatisfactionElement())
}

$(() => {
  main(window, chrome)
})
