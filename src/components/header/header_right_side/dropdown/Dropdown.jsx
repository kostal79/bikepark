import React from 'react'
import classes from './Dropdown.module.css'
import TopMenu from './navbar/top_menu/TopMenu';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false}
    }

    push() {
        const isOpen = this.state.open;
        this.setState({
            open: !isOpen
        })
    }

    render() {
        let className = classes.dropdown;
        if (this.state.open) {
            className += ' ' + classes['dropdown-active']
        }

        return (
            <div onClick={()=> this.push()} className={className}>
                <div className={classes.button}>
                <div className={classes.line + ' ' + classes.line1}></div>
                <div className={classes.line + ' ' + classes.line2}></div>
                <div className={classes.line + ' ' + classes.line3}></div>
                </div>
                <div className={classes.menu}>
                    <TopMenu />
                </div>
            </div>
        )
    }

}

export default Dropdown