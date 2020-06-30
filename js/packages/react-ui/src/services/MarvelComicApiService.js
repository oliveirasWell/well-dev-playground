const getComicList = ({ page = 0, limit = 20 }) =>
  `https://gateway.marvel.com:443/v1/public/comics?limit=${limit}&offset=${
    page * limit
  }&apikey=${process.env.REACT_APP_API_PUBLIC_KEY}`;

export class MarvelComicApiService {
  static get(page, limit) {
    return fetch(getComicList({ page, limit })).then(response =>
      response.json()
    );
  }
}
