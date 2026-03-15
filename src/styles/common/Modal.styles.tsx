import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const StyleModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`

// 배경을 어둡게 만드는 오버레이 (애니메이션 가능)
export const StyleOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background-color: ${({ theme }) => theme.colors.modalBackground};
`
// 모달 본체
export const StyleAnimatedModal = styled(motion.div)`
  position: relative;
  z-index: 110;
  width: 335px;
  margin: 0 20px;
  background-color: transparent;
  padding: 24px 16px 16px 16px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    filter: url('#pencil-texture');
    pointer-events: none;
    box-sizing: border-box;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.modalFill};
  }
`

export const StyleModalFooter = styled.div`
  display: flex;
  column-gap: 12px;
  align-items: center;
  width: 100%; /* 너비 꽉 채우기 */

  /* 중요: 내부 버튼들이 1:1 비율로 너비를 나눠 갖도록 설정 */
  & > button,
  & > div {
    flex: 1;
    min-width: 0; /* flex 아이템의 최소 너비 해제 */
  }
`
export const StyleGraphicContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
