import BestsellerList from '../../../components/book/BestsellerList'
import { fetchBookBestSellerDetail } from '@/lib/server/book'

export default async function BestsellerPage() {
  const result = await fetchBookBestSellerDetail()
  const books = result.data?.data
  console.log('books', books)

  return (
    <main>
      <BestsellerList bestSellers={books} />
    </main>
  )
}
