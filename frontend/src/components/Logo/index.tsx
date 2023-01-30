import React from 'react'
import { LogoProps } from 'types/api'
import * as S from './styles'

const Logo = ({ url, alternativeText }: LogoProps) => (
  <S.LogoWrapper
    src={process.env.NEXT_PUBLIC_IMAGE_HOST + url}
    alt={alternativeText}
  />
)

export default Logo
