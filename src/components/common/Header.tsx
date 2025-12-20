import { MoongeulIcon } from '@/assets/svgComponents'
import { Container, EmptyIcon, IconColumn, Title } from '@/styles/common/Header.styles'

type HeaderType = 'default' | 'dynamic' | 'title'

interface HeaderProps {
  headerType: HeaderType
  children?: React.ReactNode // 헤더 제목
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export default function Header({ headerType, children, leftIcon, rightIcon }: HeaderProps) {
  const renderHeaderType = (headerType: HeaderType) => {
    switch (headerType) {
      case 'dynamic':
        return (
          <Container>
            {leftIcon ? leftIcon : <EmptyIcon />}
            <Title $headerType={headerType}>{children}</Title>
            {rightIcon ? rightIcon : <EmptyIcon />}
          </Container>
        )
      case 'default':
        return (
          <Container>
            <MoongeulIcon width={143} height={35} />
            <IconColumn>
              {leftIcon ? leftIcon : <EmptyIcon />}
              {rightIcon ? rightIcon : <EmptyIcon />}
            </IconColumn>
          </Container>
        )
      case 'title':
        return (
          <Container>
            <Title $headerType={headerType}>{children}</Title>
            {rightIcon ? rightIcon : <EmptyIcon />}
          </Container>
        )
    }
  }
  return renderHeaderType(headerType)
}
