const Koa = require('koa');
const Router = require('koa-router');
const body = require('koa-better-body');

const { execFile } = require('child_process');

let app = new Koa();

app.use(body());

app.use(async ctx => {
  // console.log(url); // 请求url
  console.log(ctx.request.fields); // 携带过来的数据

  execFile('deploy.sh', { shell: true }, (err, stdout, stderr) => {
    if (err) {
      throw err;
    }
    console.log(stdout);
  });

  // let worker = ch.spawn('git', ['pull'], {
  //   cwd: '/',
  //   stdio: 'inherit'
  // });

  // worker.on('close', (code) => {
  //   if (code === 0) {
  //     console.log('pull success!');
  //   } else {
  //     console.log('pull error!');
  //   }
  // });

  ctx.body = 'ok';
});

app.listen(8081);