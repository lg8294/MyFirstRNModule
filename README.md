# MyFirstRNModule

## 安装

**npm:** `npm i my-first-rn-module`
**yarn:** `yarn add my-first-rn-module`

安装成功之后要链接到工程中:

`react-native link`

## 使用

1. 使用 xcode 打开 rn 工程中的 iOS 工程，`cmd+R` 运行 iOS 工程；

2. 在 rn 工程的代码中添加下面的代码：
```js
import myFirstRNMoudle from 'my-first-rn-module';

myFirstRNMoudle.test();
```

3. 刷新模拟器界面，查看 iOS 工程的控制台，会发现打印了一条 test 信息。
