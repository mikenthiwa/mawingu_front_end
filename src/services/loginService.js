import kaziAPI from './index';

export default (data) => {
  return kaziAPI.post('/personnel/login', data)
}
