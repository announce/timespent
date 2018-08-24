// @flow
'use strict'

const $ = require('jquery')
const firebase = require('firebase')

/**
 * chrome-extension://eocccnohoihhcbipkodfefjheegahlik/form-{}.html
 *   ?uuid=df30a0e7-7b2a-450a-8dc2-72fe9178abca
 *   &title=Production%2520Backup%2520Strategy
 *   &url=https%253A%252F%252Fconfluence.atlassian.com%252Fconf60%252Fproduction-backup-strategy-852732324.html
 *   &score=3
 */
const renderParams = (params: URLSearchParams) => {
  const INDEX_PADDING = 6
  const $title = $('#icac-page-title')
  const $satisfactions = $('.icac-satisfactions')

  const title = params.get('title')
  const score = params.get('score')

  // console.log(title, $title)
  if (title !== null) {
    $title.text(decodeURI(title))
  }
  if (score !== null) {
    const $image = $satisfactions.find(`img:nth-child(${INDEX_PADDING - parseInt(score, 10)})`)
    swapImage($image)
  }
}

const swapImage = ($target) => {
  let s1 = $target.attr('data-src')
  let s2 = $target.attr('src')
  $target.attr('data-src', s2)
  $target.attr('src', s1)
}

const post = (url, callback) => {
  const params = url.searchParams
  const uuid: string = params.get('uuid') || ''
  const href: string = params.get('url') || ''
  const score: number = parseInt(params.get('score')) || -1
  const now = new Date()
  const comment: string = $('#icac-comment').val() || ''
  // @FIXME Inject the params
  const app = firebase.initializeApp({
    apiKey: '',
    authDomain: 'test-b574f.firebaseapp.com',
    databaseURL: 'https://test-b574f.firebaseio.com',
    projectId: 'test-b574f',
    storageBucket: '',
    messagingSenderId: `${uuid}`
  })
  const messagesRef = app.database().ref().child('messages')
  const result = messagesRef.push({
    id: uuid,
    form: window.name,
    url: href,
    comment: comment.slice(0, 500),
    score: score,
    created_at: now.toISOString(),
    updated_at: now.toISOString()
  })
  return callback(result)
}

const submission = (url: URL) => {
  const $completion = $('#icac-complete')
  const $message = $('#icac-btn-message')
  const $loader = $('#icac-loading')
  const $comment = $('.form-control')
  $loader.hide()
  $completion.on('click', (e) => {
    e.preventDefault()
    $completion.addClass('disabled').prop('disabled', true)
    $comment.addClass('disabled').prop('disabled', true)
    $message.text('Sending...')
    $loader.fadeIn(100)
    post(url, (result) => {
      console.log('submission result:', result)
      $loader.fadeOut(100)
      $completion.text('✅ Completed! Closing the feedback form in a second...')
      setTimeout(() => {
        window.close()
      }, 1000)
    })
  })
}

$(() => {
  const url = new URL(window.location.href)
  // console.log(url)
  renderParams(url.searchParams)
  submission(url)

  $('.close').on('click', (e) => {
    // console.log(e)
    // 200 ms
    $(e.currentTarget).parent().fadeOut(200)
  })
})
