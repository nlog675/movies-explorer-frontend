class MainApi {
  constructor({ baseUrl, headers, credentials }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._credentials = credentials;
  };

  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  register(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, email, password }),
      credentials: this._credentials,
    })
    .then(this._getResponse);
  }

  login(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ email, password }),
      credentials: this._credentials,
    })
    .then(this._getResponse);
  }

  logout() {
    return fetch(`${this._baseUrl}/signout`, {
      method: 'GET',
      headers: this._headers,
      credentials: this._credentials,
    })
    .then(this._getResponse);
  }

  getProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers,
      credentials: this._credentials,
    })
    .then(this._getResponse);
  }

  editProfile(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
      credentials: this._credentials,
    })
    .then(this._getResponse);
  }

  addMovie(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        country: data.country,
        created_at: data.created_at,
        description: data.description,
        director: data.director,
        duration: data.duration,
        id: data.id,
        image: data.image,
        nameEN: data.nameEN,
        nameRU: data.nameRU,
        trailerLink: data.trailerLink,
        updated_at: data.updated_at,
        year: data.year,
      }),
      credentials: this._credentials,
    })
    .then(this._getResponse);
  }

  deleteMovie(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: this._credentials,
    })
    .then(this._getResponse);
  }
}

const mainApi = new MainApi({
  baseUrl: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include',
})

export { mainApi }