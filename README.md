# 自己发布的库
1. npm login
2. npm publish
---
**没有发布成功走下面3,4,5步**
3. npm config get registry
4. npm config set registry=http://registry.npmjs.org/
5. npm publish
6. 代码更新，重新publish，需要更新版本号