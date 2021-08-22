# 自己发布的库
1. npm login
<img src="./src/images/8_063.png">
2. npm publish
<img src="./src/images/8_064.png">
<img src="./src/images/8_065.png">
---
**没有发布成功走下面3,4,5步**
3. npm config get registry
4. npm config set registry=http://registry.npmjs.org/
5. npm publish
6. 代码更新，重新publish，需要更新版本号
<img src="./src/images/8_066.png">