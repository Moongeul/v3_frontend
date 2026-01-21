import BookList from '@/components/record/bookshelf/BookList'
import { Label, Spacing } from '@/components/common'
import { typography } from '@/styles/theme'

export default function BookShelfRecord() {
  return (
    <main>
      <Spacing height={12} />
      <Label labelStyle={typography.subtitleLg}>20권</Label>
      <Spacing height={16} />
      <BookList />
      <Spacing height={110} />
    </main>
  )
}
