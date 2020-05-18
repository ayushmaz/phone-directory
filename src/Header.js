import React from 'react';

const Header = function () {
    const headerStyle = {
        textAlign: 'center',
        padding: 20,
        textTransform: 'uppercase',
        background: '#000',
        color: '#fff'
    };
    return (
        <div style={headerStyle}>
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