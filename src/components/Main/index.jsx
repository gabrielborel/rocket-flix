import { API_KEY, BASE_URL, IMG_URL, language } from '../../api/index'
import {
  MainWrapper,
  Title,
  MainContent,
  Footer,
  Upper,
  MovieTitle,
  Overview,
  Categories,
} from './Main.styles'
import shuffleSVG from '../../assets/vectors/shuffle.svg'
import axios from 'axios'
import { useState } from 'react'

export const Main = () => {
  const [movie, setMovie] = useState({})

  const searchFilm = async () => {
    const randomMovie = Math.round(Math.random() * 20)
    const randomPage = Math.round(Math.random() * 485)

    const movies = await axios.get(
      `${BASE_URL}movie/top_rated?${API_KEY}&${language}&page=${randomPage}`
    )
    const { backdrop_path, title, overview, genre_ids } =
      movies.data.results[randomMovie]

    const genres = await axios.get(
      `${BASE_URL}genre/movie/list?${API_KEY}&${language}`
    )
    const allGenres = genres.data.genres

    setMovie({
      title: title,
      overview: overview,
      genres: allGenres.filter((genre) => genre_ids.includes(genre.id)),
      imgUrl: backdrop_path,
    })
  }

  return (
    <MainWrapper>
      <div>
        <Title>
          <img src={shuffleSVG} alt='Shuffle' />
          <p>Não sabe o que assistir?</p>
        </Title>
        <MainContent>
          <Upper>
            {movie.imgUrl && <img src={`${IMG_URL}${movie.imgUrl}`} alt='' />}
            <div>
              <MovieTitle>{movie.title}</MovieTitle>
              <Categories>
                {movie.genres !== undefined &&
                  movie.genres.map(({ name, id }) => <p key={id}>{name}</p>)}
              </Categories>
            </div>
          </Upper>
          <Overview>{movie.overview}</Overview>
        </MainContent>
        <Footer>
          <button type='button' onClick={searchFilm}>
            <img src={shuffleSVG} alt='Shuffle' />
            <p>Encontar filme</p>
          </button>
          <p>
            Clique em "Encontrar filme" que traremos informações de algum filme
            para você assistir hoje.
          </p>
        </Footer>
      </div>
    </MainWrapper>
  )
}
