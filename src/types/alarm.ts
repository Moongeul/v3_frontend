export interface AlarmType {
  id: number
  relatedId: number
  notificationType: NotificationType
  profileImage: string
  content: string
  createdAt: string
  read: boolean
}
export type NotificationType =
  | 'NOTICE'
  | 'LIKE'
  | 'COMMENT'
  | 'FOLLOW_OPEN'
  | 'FOLLOW_PRIVATE'
  | 'FOLLOW_PRIVATE_ACCEPTED'

export interface FollowAcceptType {
  followerId: number
  status: 'ACCEPT' | 'DELETE'
}
