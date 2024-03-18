import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import NavIcon from '../icon/NavIcon'
import SmallIcon from '../icon/SmallIcon'
import { textBody1 } from '../../theme'

type Props = {
    containerClassName: string,
    title: string,
    iconName: 'category' | 'link'
}

const MenuCard = ({ containerClassName, title, iconName }: Props) => {
    const [state, setState] = useState(false)

    return (
        <TouchableOpacity className={'mt-[20px] border-2 border-card rounded-lg p-sm flex-row items-center justify-evenly ' + containerClassName}
            onPress={() => { setState(!state) }}>
            <SmallIcon name={iconName} />
            <Text className={textBody1}>{title}</Text>

            {/* right icon */}
            <SmallIcon size={16} name={'arrow'} active={state} />
        </TouchableOpacity >
    )
}

export default MenuCard