import { ProfileInfoType } from '@/types/user'

export interface StoryInfoType {
  storyId: number
  storyImage: string
  created: string
}
export interface StoryDetailType {
  memberInfo: ProfileInfoType
  storyInfo: StoryInfoType
}
