import { BestSellerType } from '@/types/book'
import { StyleBestSellerBookRowContainer } from '@/styles/common/Book.styles'
import { BookInfoSummary } from '@/components/common'
import BestSellerItem from '@/components/book/BestSellerItem'

interface BookHomeBestsellerListProps {
  bestSellers: BestSellerType[] | undefined
}
export default function BookHomeBestsellerList({ bestSellers }: BookHomeBestsellerListProps) {
  return (
    <StyleBestSellerBookRowContainer>
      {bestSellers?.map((bestSeller) => (
        <BestSellerItem
          key={bestSeller.isbn}
          isbn={bestSeller.isbn}
          title={bestSeller.title}
          author={bestSeller.author}
          bookImage={bestSeller.bookImage}
        />
      ))}
    </StyleBestSellerBookRowContainer>
  )
}
