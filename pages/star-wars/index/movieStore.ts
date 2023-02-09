import { defineStore } from 'pinia';
import type { Movie, MovieDetails } from '../types'


type Movies = {
    moviesList: Movie[] | undefined;
};

export const useMovieStore = defineStore({
    id: 'movies',

    state: (): Movies => ({
        moviesList: undefined,
    }),

    getters: {

    },

    actions: {

        async fetchStarWarsMovies() {
            console.log('https://star-wars.brillout.com/api/films.json');
            
            const response = await fetch('https://star-wars.brillout.com/api/films.json')
            let movies: MovieDetails[] = ((await response.json()) as any).results
            this.moviesList = movies.map((movie: MovieDetails, i: number) => ({
                ...movie,
                id: String(i + 1)
            }))

        }

    },
});
