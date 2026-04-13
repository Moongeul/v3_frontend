export default async function BookDetailLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ isbn: string }>
}>) {
  const { isbn } = await params
  return <div>{children}</div>
}
