const fs = require('fs');
let css = fs.readFileSync('src/app/globals.css', 'utf-8');

// Replace hex color
css = css.replace(/#ff5b9d/g, '#ff7a00');

// Replace rgb color
css = css.replace(/255,91,157/g, '255,122,0');

fs.writeFileSync('src/app/globals.css', css);
