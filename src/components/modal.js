import React, {Component} from 'react'
import {observable, action} from 'modx'
import {observer} from 'react-modx'

@observer

class Modal extends Component{
    @observable isOpen = false
   @action open = (e) => {
       if(e){
           e.preventDefault()
       }
       this.isOpen = true
   }
   @action close = (e) => {
       if(e){
           e.preventDefault()
       }
       this.isOpen = false
   }
   render(){
       return(
           <div id='modal'>
           </div>
           )
   }
}
export default Modal