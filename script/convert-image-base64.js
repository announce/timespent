// const path = require('path')
const base64Img = require('base64-img')

const satisfactionUrls = [...Array(5).keys()].map((index) => {
  return {
    color: base64Img.base64Sync(`src/crx/image/${index + 1}_color.png`),
    mono: base64Img.base64Sync(`src/crx/image/${index + 1}_mono.png`)
  }
})

console.log(JSON.stringify(satisfactionUrls))
