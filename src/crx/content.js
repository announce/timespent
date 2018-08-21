// @flow
'use strict'
const fs = require('fs')
const path = require('path')
const $ = require('jquery')
const ejs = require('ejs')
const satisfactionImages = require('./image/base64')

const createLanguageSwitcherElement = () => {
  return ejs.render(fs.readFileSync(path.resolve('src/crx/language-switcher.html.ejs'), 'utf-8'), {})
}

const createSatisfactionElement = () => {
  return ejs.render(fs.readFileSync(path.resolve('src/crx/satisfaction-feedback.html.ejs'), 'utf-8'), {
    satisfactionImages: satisfactionImages
  })
}

/**
 * https://developer.chrome.com/extensions/content_scripts
 */
$(() => {
  $('.page-sidebars')
    .prepend(createLanguageSwitcherElement())
    .append(createSatisfactionElement())
  // @TODO
  const url = new URL(chrome.extension.getURL('form.html'))
  url.searchParams.set('aaa', 1)
  window.open(url, 'SingleSecondaryWindowName', 'resizable,scrollbars')
})
