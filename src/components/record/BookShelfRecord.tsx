import Book from '@/components/record/bookshelf/Book'

export default function BookShelfRecord() {
  return (
    <div>
      <Book
        height={160}
        postCount={3}
        backgroundColor={'#7AA0FF80'}
        title={'좀 된거좀'}
        borderColor={'#7AA0FF80'}
        articleId={1}
        ratingAverage={4.9}
        weight={28}
      />

      <Book
        height={160}
        postCount={3}
        backgroundColor={'#7AA0FF80'}
        title={'좀 된거좀좀 된거좀좀 된거좀'}
        borderColor={'#7AA0FF80'}
        articleId={1}
        ratingAverage={4.9}
        weight={200}
      />
      <Book
        height={300}
        postCount={3}
        backgroundColor={'#7AA0FF80'}
        title={'좀 된거좀좀 된거좀좀 된거좀좀 된거좀좀 된거좀좀 된거좀'}
        borderColor={'#7AA0FF80'}
        articleId={1}
        ratingAverage={4.9}
        weight={50}
      />
      <Book
        height={300}
        postCount={3}
        backgroundColor={'#7AA0FF80'}
        title={'좀 된거좀좀 된거좀좀 된거좀좀 된거좀좀 된거좀좀 된거좀'}
        borderColor={'#7AA0FF80'}
        articleId={1}
        ratingAverage={4.9}
        weight={50}
      />
    </div>
  )
}
