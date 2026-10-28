import {mkdir,copyFile,cp} from 'node:fs/promises';
await mkdir('dist',{recursive:true});for(const f of ['index.html','styles.css','app.mjs','model.mjs','report.mjs'])await copyFile(f,'dist/'+f);for(const d of ['data','vendor'])await cp(d,'dist/'+d,{recursive:true});console.log('Production build complete. Relative assets support /Cost-Lab-Mission-3/.');
