import FollowerItem from '@/components/mypage/follow/FollowerItem'
import { Spacing } from '@/components/common'
import { fetchFollowers } from '@/lib/server/mypage'

export default async function FollowerPage() {
  const result = await fetchFollowers()
  const followers = result.data

  return (
    <>
      <Spacing height={12} />

      {followers?.map((follower) => (
        <div key={follower.id}>
          <FollowerItem
            myFollowStatus={follower.myFollowStatus}
            profileImage={follower.profileImage}
            nickname={follower.nickname}
            readingTasteType={follower.readingTasteType}
            id={follower.id}
          />
          <Spacing height={20} />
        </div>
      ))}
    </>
  )
}
