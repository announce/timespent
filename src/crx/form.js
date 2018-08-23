// @flow
'use strict'

const $ = require('jquery')
// const app = require('./app')

/**
 * chrome-extension://eocccnohoihhcbipkodfefjheegahlik/form.html
 *   ?uuid=df30a0e7-7b2a-450a-8dc2-72fe9178abca
 *   &title=Production%2520Backup%2520Strategy
 *   &url=https%253A%252F%252Fconfluence.atlassian.com%252Fconf60%252Fproduction-backup-strategy-852732324.html
 *   &score=3
 */

const renderParams = (params) => {
  const $title = $('#icac-page-title')
  const $satisfactions = $('.icac-satisfactions')

  const title = params.get('title')
  const score = params.get('score')
  if (title === null || score === null) {
    return
  }
  const $image = $satisfactions.find(`img:nth-child(${5 - parseInt(score, 10)})`)
  $title.text(decodeURI(title))
  swapImage($image)
  // console.log($satisfactions, $image)
}

const swapImage = ($target) => {
  let s1 = $target.attr('data-src')
  let s2 = $target.attr('src')
  $target.attr('data-src', s2)
  $target.attr('src', s1)
}

$(() => {
  window.alert(1)
  const url = new URL(window.location.href)
  console.log(url)
  renderParams(url.searchParams)
  // $('.page-sidebars')
  //   .prepend(createLanguageSwitcherElement())
  //   .append(createSatisfactionElement())
})
