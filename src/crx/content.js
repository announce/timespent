// @flow
'use strict'
const fs = require('fs')
const path = require('path')
const $ = require('jquery')
const ejs = require('ejs')
const satisfaction = require('./image/base64')
const app = require('./app')

const createLanguageSwitcherElement = () => {
  return ejs.render(fs.readFileSync(path.resolve('src/crx/language-switcher.html.ejs'), 'utf-8'), {})
}

const createSatisfactionElement = () => {
  const url = new URL(chrome.extension.getURL('form.html'))
  url.searchParams.set('url', encodeURIComponent(window.location.href))
  const sat = satisfaction.map((value, index) => {
    url.searchParams.set('score', 5 - index)
    return {...{
      href: url.href
    },
    ...value}
  })
  console.log('satisfaction:', sat)
  return ejs.render(fs.readFileSync(path.resolve('src/crx/satisfaction-feedback.html.ejs'), 'utf-8'), {
    app: app,
    satisfaction: sat
  })
}

/**
 * https://developer.chrome.com/extensions/content_scripts
 */
$(() => {
  $('.page-sidebars')
    .prepend(createLanguageSwitcherElement())
    .append(createSatisfactionElement())
})
