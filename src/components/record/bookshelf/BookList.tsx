'use client'

import { StyleBookShelfContainer, StyleShelfRow } from '@/styles/record/BookShelf.styles'
import Book from '@/components/record/bookshelf/Book'

export default function BookList({}) {
  const books = [
    {
      articleId: 1,
      isbn: '9791101',
      title: '클린 코드',
      ratingAverage: 4.8,
      ratingCount: 120,
      weight: 45,
      height: 110,
      postCount: 5,
    },
    {
      articleId: 2,
      isbn: '9791102',
      title: '객체지향의 사실과 오해',
      ratingAverage: 4.9,
      ratingCount: 85,
      weight: 38,
      height: 105,
      postCount: 12,
    },
    {
      articleId: 3,
      isbn: '9791103',
      title: '리액트 디자인 패턴과 베스트 프랙티스',
      ratingAverage: 4.5,
      ratingCount: 42,
      weight: 60,
      height: 125,
      postCount: 3,
    },
    {
      articleId: 4,
      isbn: '9791104',
      title: '자바스크립트 Deep Dive',
      ratingAverage: 4.7,
      ratingCount: 210,
      weight: 72,
      height: 128,
      postCount: 24,
    },
    {
      articleId: 5,
      isbn: '9791105',
      title: '도커/쿠버네티스',
      ratingAverage: 4.2,
      ratingCount: 33,
      weight: 30,
      height: 95,
      postCount: 6,
    },
    {
      articleId: 6,
      isbn: '9791106',
      title: 'Refactoring 2nd Edition',
      ratingAverage: 4.9,
      ratingCount: 67,
      weight: 52,
      height: 115,
      postCount: 8,
    },
    {
      articleId: 7,
      isbn: '9791107',
      title: 'HTTP 완벽 가이드',
      ratingAverage: 4.4,
      ratingCount: 91,
      weight: 68,
      height: 122,
      postCount: 15,
    },
    {
      articleId: 8,
      isbn: '9791108',
      title: 'SQL 첫걸음',
      ratingAverage: 4.0,
      ratingCount: 15,
      weight: 25,
      height: 88,
      postCount: 1,
    },
    {
      articleId: 9,
      isbn: '9791109',
      title: '미움받을 용기',
      ratingAverage: 4.6,
      ratingCount: 305,
      weight: 35,
      height: 100,
      postCount: 50,
    },
    {
      articleId: 10,
      isbn: '9791110',
      title: '데이터 중심 애플리케이션 설계',
      ratingAverage: 4.9,
      ratingCount: 58,
      weight: 72,
      height: 128,
      postCount: 7,
    },
    {
      articleId: 11,
      isbn: '9791111',
      title: 'Effective TypeScript',
      ratingAverage: 4.8,
      ratingCount: 44,
      weight: 40,
      height: 112,
      postCount: 4,
    },
    {
      articleId: 12,
      isbn: '9791112',
      title: '테스트 주도 개발',
      ratingAverage: 4.7,
      ratingCount: 29,
      weight: 32,
      height: 98,
      postCount: 2,
    },
    {
      articleId: 13,
      isbn: '9791113',
      title: '실용주의 프로그래머',
      ratingAverage: 4.9,
      ratingCount: 124,
      weight: 48,
      height: 108,
      postCount: 9,
    },
    {
      articleId: 14,
      isbn: '9791114',
      title: '가상 면접 사례로 배우는 대규모 시스템 설계 기초',
      ratingAverage: 4.8,
      ratingCount: 76,
      weight: 55,
      height: 120,
      postCount: 6,
    },
    {
      articleId: 15,
      isbn: '9791115',
      title: '디자인 패턴 (GoF)',
      ratingAverage: 4.3,
      ratingCount: 18,
      weight: 65,
      height: 125,
      postCount: 0,
    },
    {
      articleId: 16,
      isbn: '9791116',
      title: '자바 ORM 표준 JPA 프로그래밍',
      ratingAverage: 4.9,
      ratingCount: 152,
      weight: 70,
      height: 128,
      postCount: 21,
    },
    {
      articleId: 17,
      isbn: '9791117',
      title: 'Clean Architecture',
      ratingAverage: 4.6,
      ratingCount: 88,
      weight: 42,
      height: 110,
      postCount: 11,
    },
    {
      articleId: 18,
      isbn: '9791118',
      title: '단위 테스트',
      ratingAverage: 4.7,
      ratingCount: 31,
      weight: 36,
      height: 102,
      postCount: 3,
    },
    {
      articleId: 19,
      isbn: '9791119',
      title: '함수형 프로그래밍',
      ratingAverage: 4.1,
      ratingCount: 12,
      weight: 28,
      height: 90,
      postCount: 0,
    },
    {
      articleId: 20,
      isbn: '9791120',
      title: 'Next.js 완벽 가이드: 서버 사이드 렌더링의 모든 것',
      ratingAverage: 4.8,
      ratingCount: 55,
      weight: 58,
      height: 128,
      postCount: 18,
    },
  ]

  // 데이터를 5개씩 묶는 헬퍼 함수
  const splitBooksByWeight = (books, maxWeight) => {
    return books.reduce(
      (rows, book) => {
        // 마지막 줄(현재 작업 중인 줄) 가져오기
        const lastRow = rows[rows.length - 1]

        // 현재 줄의 weight 총합 계산 (간격 gap 4px도 포함하면 더 정확합니다)
        const currentRowWeight = lastRow.reduce((sum, b) => sum + b.weight + 4, 0)

        // 이번 책을 더했을 때 maxWeight를 넘는지 확인
        if (currentRowWeight + book.weight <= maxWeight) {
          lastRow.push(book)
        } else {
          // 넘으면 새로운 줄 생성
          rows.push([book])
        }
        return rows
      },
      [[]]
    ) // 빈 배열이 담긴 배열로 시작
  }

  // 사용 예시 (너비 제한 355px)
  const rows = splitBooksByWeight(books, 355)

  return (
    <StyleBookShelfContainer>
      {rows.map((row, index) => (
        <StyleShelfRow key={index}>
          {row.map((book) => (
            <Book key={book.articleId} {...book} borderColor={'#FFC35480'} backgroundColor={'#FFC35480'} />
          ))}
        </StyleShelfRow>
      ))}
    </StyleBookShelfContainer>
  )
}
