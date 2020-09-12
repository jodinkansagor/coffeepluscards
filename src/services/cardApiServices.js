export const postCard = (cardPull) => request('/cardpulls', 'POST', cardPull)

export const getCards = () => {
  const queryString = window.location.hash.slice(1)
  request(`/cardpulls:${queryString}`, 'GET')
}