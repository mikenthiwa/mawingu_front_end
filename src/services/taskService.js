import kaziAPI from './index';

export default (token, page) => {
  return kaziAPI.get(
    `/tasks/assigned?page=${page}&limit=5&order=created&orderMethod=DESC`,
    {
      headers: {
        'Authorization': `Bearer ${token}`
      }
  })
}

export const nextPageService = (token, page) => {
  return kaziAPI.get(
    `/tasks/assigned?page=${page}&limit=5`,
    {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
  )
};
