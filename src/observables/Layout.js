import {
  extendObservable,
  action,
} from 'mobx'

import Pattern from '../assets/pattern.png'

class Layout {
  constructor(){
    extendObservable(this, {
      height: window.innerHeight,
      get containerStyle() {
        return {
          height: this.height,
          background: `url(${Pattern})`,
        }
      },
      get facadeStyleOne(){
        return {
          height: this.height-82,
          background: 'linear-gradient(to top left, rgba(255,0,0,0), rgba(211,184,174,0.9))'
        }
      },
      get facadeStyleTwo(){
        return {
          height: this.height-82,
          background: 'linear-gradient(to top left, rgba(255,0,0,0), rgba(161,136,127,0.9))'
        }
      },
      get facadeStyleThree(){
        return {
          height: this.height-82,
          background: 'linear-gradient(to top left, rgba(255,0,0,0), rgba(114,91,83,0.9))'
        }
      },
      get mediaStyle(){
        return {
          height: this.height * .60,
        }
      },
      resizeHeight: action(h=> {
        this.height = h
      }),
    })
  }
}
export default Layout