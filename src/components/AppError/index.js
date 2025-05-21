import * as S from './styled';

import React from 'react'

const AppError = ({message}) => {
  return (
    <S.Wrapper>
      <h1>Erro</h1>
      <span>{message}</span>
    </S.Wrapper>
  )
}

export default AppError
