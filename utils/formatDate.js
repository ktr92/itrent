export const formatDate = (createdAt) => {
  const dateCreatedAt = new Date(createdAt)
  return dateCreatedAt.toLocaleString('ru-RU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
}
