import React from 'react'
import MenuList from '../menu_list/MenuList';
import UserLink from './user-link/UserLink';
import classes from './TopMenu.module.css'
import Button from '../../../../../../UI/buttons/Button';

const TopMenu = () => {
    return (
        <div className={classes.wrapper}>
            <MenuList />
            <UserLink />
            <Button text='Обратная связь' link='feedback'/>
        </div>
    );
};

export default TopMenu