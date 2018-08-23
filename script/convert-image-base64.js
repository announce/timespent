// const path = require('path')
const base64Img = require('base64-img')

const satisfaction = [...Array(5).keys()].map((index) => {
  return {
    color: base64Img.base64Sync(`src/crx/image/${index + 1}_color.png`),
    mono: base64Img.base64Sync(`src/crx/image/${index + 1}_mono.png`)
  }
})

const meeple = {
  mogawa: base64Img.base64Sync(`src/crx/image/neko.jpg`),
  ahirama: base64Img.base64Sync(`src/crx/image/neko.jpg`)
}

console.log(JSON.stringify({
  meeple: meeple,
  satisfaction: satisfaction
}))
