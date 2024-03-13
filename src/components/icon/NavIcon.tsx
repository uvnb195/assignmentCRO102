import React from 'react'
import { Image, View } from 'react-native'
import { NavItemType } from '../../constants'
import Home from '../../assets/icons/icon_home.svg'
import Stat from '../../assets/icons/icon_stat.svg'
import Search from '../../assets/icons/icon_search.svg'
import Person from '../../assets/icons/icon_person.svg'
import Setting from '../../assets/icons/icon_setting.svg'
import Add from '../../assets/icons/icon_add.svg'
import Menu from '../../assets/icons/icon_menu.svg'




type Props = {
    size?: number;
    name: NavItemType,
}

const NavIcon = ({ size, name }: Props) => {
    const renderIcon = () => {
        switch (name) {
            case 'Home':
                return (
                    <Home width={size || 40} height={size || 40} />
                )
            case 'Stat':
                return (
                    <Stat width={size || 40} height={size || 40} />
                )
            case 'Search':
                return (
                    <Search width={size || 40} height={size || 40} />
                )
            case 'Profile':
                return (
                    <Person width={size || 40} height={size || 40} />
                )
            case 'Add':
                return (
                    <Add width={size || 40} height={size || 40} />
                )
            case 'Setting':
                return (
                    <Setting width={size || 40} height={size || 40} />
                )
            case 'Menu':
                return (
                    <Menu width={size || 40} height={size || 40} />
                )
        }
    }
    return renderIcon()
}

export default NavIcon