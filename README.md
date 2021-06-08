# webpack-demo
source map: 当 webpack 打包源代码时，可能会很难追踪到 error(错误) 和 warning(警告) 在源代码中的原始位置。为了更容易地追踪 error 和 warning，JavaScript 提供了 source map 功能，可以将编译后的代码映射回原始源代码。
watch mode: 你可以指示 webpack "watch" 依赖图中所有文件的更改。如果其中一个文件被更新，代码将被重新编译，所以你不必再去手动运行整个构建。
webpack-dev-server: 为你提供了一个简单的 web server，并且具有 live reloading(实时重新加载) 功能。
webpack-dev-middleware: 是一个封装器(wrapper)，它可以把 webpack 处理过的文件发送到一个 server。