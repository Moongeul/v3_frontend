import { Spacing } from '@/components/common'
import { fetchFollowings } from '@/lib/server/mypage'
import FollowerItem from '@/components/mypage/follow/FollowerItem'

export default async function FollowingPage() {
  const result = await fetchFollowings()
  const followings = await result.data

  return (
    <>
      <Spacing height={12} />

      {followings?.map((following) => (
        <div key={following.id}>
          <FollowerItem
            myFollowStatus={following.myFollowStatus}
            profileImage={following.profileImage}
            nickname={following.nickname}
            readingTasteType={following.readingTasteType}
            id={following.id}
          />
          <Spacing height={20} />
        </div>
      ))}
    </>
  )
}
