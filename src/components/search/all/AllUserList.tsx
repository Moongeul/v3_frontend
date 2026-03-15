'use client'

import { StyledAllUserWrapper } from '@/styles/search/Search.styles'
import { Spacing, Spinner } from '@/components/common'
import AllUserItem from '@/components/search/all/AllUserItem'
import { SearchUserDataType } from '@/types/search'

interface AllUserListProps {
  allUsers: SearchUserDataType[]
  isFetchingNextPage?: boolean
  scrollRef?: (node?: Element | null) => void // ref 이름은 HTML 기본 ref와 충돌을 피하기 위해 scrollRef로 권장
}

export default function AllUserList({ allUsers, isFetchingNextPage, scrollRef }: AllUserListProps) {
  return (
    <StyledAllUserWrapper>
      {allUsers.map((user) => (
        <div key={user.userId}>
          <AllUserItem nickname={user.nickname} userId={user.userId} profileImage={user.profileImage}></AllUserItem>
          <Spacing height={20} />
        </div>
      ))}

      {/* 스크롤 감지 영역 (All 탭 무한스크롤 시 사용) */}
      {scrollRef && (
        <div ref={scrollRef} style={{ height: 20 }}>
          {isFetchingNextPage && <Spinner />}
        </div>
      )}
    </StyledAllUserWrapper>
  )
}
