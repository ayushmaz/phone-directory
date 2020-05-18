import React from 'react';
import './Header.css'

const Header = function () {
    //inline styling
    // const headerStyle = {
    //     textAlign: 'center',
    //     padding: 20,
    //     textTransform: 'uppercase',
    //     background: '#000',
    //     color: '#fff'
    // };
    return (
        <div className='header'>
            Phone Directory
        </div>
    );
}


//we dont need a class component as there is no state
// class Header extends Component{
//     render(){
//         return(<div>Phone Directory</div>);
//     }
// }

export default Header;