const Koa = require('koa');
const Router = require('koa-router');
const body = require('koa-better-body');

const ch = require('child_process');

let app = new Koa();

app.use(body());

app.use(async ctx => {
  // console.log(url); // 请求url
  console.log(ctx.request.fields); // 携带过来的数据

  let worker = ch.spawn('git', ['pull'], {
    cwd: '/',
    stdio: 'inherit'
  });

  worker.on('close', (code) => {
    if (code === 0) {
      console.log('pull success!');
    } else {
      console.log('pull error!');
    }
  });

  ctx.body = 'ok';
});

app.listen(8081);