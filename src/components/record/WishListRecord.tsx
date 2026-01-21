import BookList from '@/components/record/wishlist/BookList'
import { Spacing } from '@/components/common'

export default function WishListRecord() {
  return (
    <>
      <Spacing height={12} />
      <BookList />
      <BookList />
      <BookList />
      <BookList />
    </>
  )
}
