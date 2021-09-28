if (!/yarn\.js$/.test(process.env.npm_execpath || '')) {
  console.warn('\u001b[33m该项目需要使用 yarn 来安装运行。\u001b[39m\n')
  process.exit(1)
}
