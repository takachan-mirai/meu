#!/usr/bin/env node
if(process.argv.length < 3) console.log("めう！");
else process.argv.forEach((obj, i) => {
  if(i > 1) console.log(obj + "めう！");
});
