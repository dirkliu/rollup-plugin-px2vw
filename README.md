# rollup-plugin-px2vw
Arollup plugin, transform px to vw in stylesheets.


### Install
``` 
npm install rollup-plugin-px2vw
``` 

### Options
* Include: RegExp   
A regular expression that matches the file to be transformed
* Exclude: RegExp  
A regular expression that matches the file not to be transformed
* ViewportWidth: Number  
Set standard viewportWidth, The size computed based on the standard viewportWidth.
* Decimal: Number  
Set the precision of the transform.


### Examples 
``` 
// rollu.config.js
import px2vw from 'rollup-plugin-px2vw'
export default {
  ....
  plugins: [
    px2vw({
      include: /.css$|\.s[ac]ss$|\.vue$/,   // Files need to transform
      exclude: /node_modules/,   // Files don't need to transform
      viewportWidth: 750, // Set standard viewport width to 750px.  1vw = 7.5px
    })
  ]
}
```
