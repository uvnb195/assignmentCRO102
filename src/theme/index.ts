import { NativeWindStyleSheet } from "nativewind"
import { StyleSheet } from "react-native"

//Color
export const white = (value?: number) => `rgba(255,255,255,${value ? value : 1})`
export const black = (value?: number) => `rgba(0,0,0,${value || 1})`
export const gray = `#FF453A`
export const green = `#34C759`
export const red = `#FF453A`

// background config
export const itemBgLight = {
    backgroundColor: white(0.1),
    borderColor: white(0.5),
}

export const itemBgDark = {
    backgroundColor: black(0.2),
    borderColor: white(0.5),
}

//border radius


// tailwind custom class

//text color
export const textWhite = `text-[#ffffff]`
export const textGreen = `text-primary-green`
export const textRed = `text-primary-red`
export const textGray = `text-primary-dark`
//text format
export const textWelcome = `text-[36px] font-extrabold tracking-[1.5px] ${textWhite}`
export const textTitle1 = `text-[28px] font-[600] leading-auto ${textWhite} tracking-[0.38px]`
export const textTitle2 = `text-[22px] font-[600] leading-[28px] ${textWhite} tracking-[1px] `
export const textTitle3 = `text-[20px] font-[400] leading-[24px] tracking-[0.38px] ${textWhite}`
export const textBody1 = `text-[17px] font-[500] leading-[22px] tracking-[0.7px] ${textWhite}`
export const textBody1Light = `text-[17px] font-[400] leading-[22px] tracking-[0.5px] ${textWhite}`
export const textBody2 = `text-[13px] font-[400] leading-[13px] tracking-[0.5px] ${textWhite}`
export const textBody2Gray = `text-[13px] font-[400] leading-[13px] tracking-[0.7px] text-primary-dark`

// `text-[13px] font-[400] leading-[13px] tracking-[0.7px] ${textGray}`

