# Tip

## Debugger

1. 等待函数

   ```
   await new Promise(resolve => setTimeout(resolve, 1000))
   ```

2. 调试页面元素

   ```js
   document.addEventListener('keydown', (e) => {
     if (e.key === 'Enter') debugger
   })
   ```

   ```js
   setTimeout(() => {
     debugger
   }, 3000)
   ```
