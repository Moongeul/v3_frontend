export const handleShare = async () => {
  const shareData = {
    title: '나의 독서 취향 테스트 결과',
    text: '나의 독서 취향은 어떤 타입일까? 지금 바로 확인해보세요!',
    url: window.location.href, // 현재 결과 페이지 URL (type 포함)
  }

  try {
    // 1. Web Share API를 지원하는지 확인 (모바일 브라우저 위주)
    if (navigator.share) {
      await navigator.share(shareData)
    } else {
      // 2. 지원하지 않는 경우 (데스크톱 등) 클립보드 복사
      await navigator.clipboard.writeText(window.location.href)
      alert('링크가 클립보드에 복사되었습니다! 친구들에게 공유해보세요.')
    }
  } catch (error) {
    console.log('공유하기 실패:', error)
  }
}
