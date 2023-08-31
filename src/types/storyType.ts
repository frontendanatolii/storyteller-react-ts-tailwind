export type Story = {
  id: number,
  title: string,
  publishDate: string,
  photos: string[],
  lastModifyDate: string,
  status: 'Live' | 'Draft' | 'Scheduled' | 'Past',
  liveFrom: string | null,
  ends: string | null
}