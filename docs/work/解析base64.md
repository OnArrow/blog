# 如何将一个通过 gzip 压缩得来的 base64 字符串反向解析

## 测试网址

1. https://www.bejson.com/encrypt/gzip

## 解析 base64

### 通过`pako`解析

```js
const data = 'H4sIAAAAAAAAA3u6q+tpZ++zGX3P5nQ8be0EAIro9KsPAAAA'
// 将gzip字符串转换为Uint8Array类型的数据
const gzipData = new Uint8Array(
  atob(data)
    .split('')
    .map((char) => char.charCodeAt(0))
)

// 解压gzip数据
const uncompressedData = pako.inflate(gzipData, { to: 'string' })

// 输出解压后的数据
console.log(uncompressedData)
```

### `NodeJs`环境下

```js
const zlib = require('zlib')

// 要解码和解压缩的base64字符串
const data = 'H4sIAAAAAAAAA3u6q+tpZ++zGX3P5nQ8be0EAIro9KsPAAAA'

// 将base64字符串转换为Buffer
const compressedBuffer = Buffer.from(data, 'base64')

const uncompressedString = zlib.gunzipSync(compressedBuffer)

const result = uncompressedString.toString('utf8')

console.log(result)
```
