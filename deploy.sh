#!/bin/bash
git checkout dev
npm run build:prod
# htmldir = "D:/"
# uploadbasedir = "${htmldir}/hooks"
# uploaddir = "${uploadbasedir}/v1.0.0"
# scp -r ./dist/. txcloud:${uploaddir}
scp -r ./dist/. txcloud: "D:/hooks/v1.0.0"
exit
eeooff
echo done