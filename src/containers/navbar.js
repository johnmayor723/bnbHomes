import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Navbar extends Component{
    render(){
        return(
            <nav className='navbar navbar-expand'>
           <div className='container-fluid'>
              <Link to ='/'className='navbar-brand'>
                 bnbHomes
              </Link>
          
           <ul className='nav navbar-nav navbar-right'>
               <li>
                   <Link to='/signup'>Sign up</Link>
               </li>
               <li>
                   <Link to='/signin'>Sign in</Link>
               </li>
               <li>
                   <Link to='/signout'>Sign out</Link>
               </li>
           </ul>
          </div>
        </nav>
            )
    }
}
function mapSteateToProps(state){
   return  {
       currentUser: state.currentUser
   } 
}

export default connect(mapSteateToProps, null)(Navbar)