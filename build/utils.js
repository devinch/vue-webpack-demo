'use strict'
/**
 * 工具包
 */

const path = require('path')
const config = require('../config')

exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

// css加载器
exports.cssLoaders = function (options) {

}

exports.styleLoaders = function (options) {

}

exports.createNotifierCallback = () => {

}
