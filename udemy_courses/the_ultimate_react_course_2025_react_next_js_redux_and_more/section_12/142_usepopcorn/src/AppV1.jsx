import { useEffect, useState } from 'react'
import './App.scss'
import NavBar from './NavBar';
import StarRating from './StarRating';



const tempMovieData = [
	{
		imdbID: "tt1375666",
		Title: "Inception",
		Year: "2010",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
	},
	{
		imdbID: "tt0133093",
		Title: "The Matrix",
		Year: "1999",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
	},
	{
		imdbID: "tt6751668",
		Title: "Parasite",
		Year: "2019",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
	},
];

const tempWatchedData = [
	{
		imdbID: "tt1375666",
		Title: "Inception",
		Year: "2010",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
		runtime: 148,
		imdbRating: 8.8,
		userRating: 10,
	},
	{
		imdbID: "tt0088763",
		Title: "Back to the Future",
		Year: "1985",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		runtime: 116,
		imdbRating: 8.5,
		userRating: 9,
	},
];

const average = (arr) =>
	arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const KEY = import.meta.env.VITE_OMDBAPI_KEY;

export default function App() {

	const [movies, setMovies] = useState([]);
	const [watched, setWatched] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const [query, setQuery] = useState("");
	const [selectedId, setSelectedId] = useState(null);

	function handleSelectedId(id) {
		if (id == selectedId) {
			setSelectedId(null);
		} else {
			setSelectedId(id);
		}
	}

	function handleCloseMovie() {
		setSelectedId(null);
	}

	function handleAddWatched(movie) {
		setWatched((watched) => [...watched, movie]);
	}

	function handleDeleteWatched(id) {
		setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
	}

	useEffect(function () {

		const controller = new AbortController();

		async function fetchMovies() {

			try {
				setIsLoading(true);
				setError("");

				const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`, {signal: controller.signal});

				if (!res.ok) { throw new Error("Something went wrong with fetching movies."); }

				const data = await res.json();

				if (data.Response === "False") { throw new Error("Movie not found."); }

				setMovies(data.Search);
				setError("");

			} catch (err) {
				// console.error(err);
				if (err.name !== "AbortError") {
					setError(err.message);
				}
			} finally {
				setIsLoading(false);
			}

		}

		if (query.length < 3) {
			setMovies([]);
			setError("");
			return;
		}

		handleCloseMovie();
		fetchMovies();

		return function() {
			controller.abort();
		}

	}, [query]);

	return (
		<>
			<NavBar movies={movies} query={query} setQuery={setQuery}></NavBar>

			<Main >
				{/* <Box element= <MovieList movies={movies} /> ></Box> */}
				<Box>
					{/* { isLoading ? <Loader></Loader> : <MovieList movies={movies}></MovieList>} */}
					{isLoading && <Loader></Loader>}
					{error && <ErrorMessage message={error}></ErrorMessage>}
					{!isLoading && !error && <MovieList movies={movies} onSelectMovie={handleSelectedId}></MovieList>}
				</Box>

				<Box>
					{
						selectedId ?
							<MovieDetails 
								selectedId={selectedId} 
								onCloseMovie={handleCloseMovie} 
								onAddWatched={handleAddWatched}
								watched={watched}
							></MovieDetails> :
							<>
								<WatchedSummery watched={watched}></WatchedSummery>
								<WatchedMovieList watched={watched} onDeleteWatched={handleDeleteWatched} ></WatchedMovieList>
							</>
					}
				</Box>

			</Main>
		</>
	);
}

function Main({ children }) {

	return (
		<main className="main">
			{children}
		</main>
	)
}

function Loader() {
	return (
		<p className='loader'>Loading ...</p>
	)
}

function ErrorMessage({ message }) {
	return (
		<p className='error'>{message}</p>
	)
}

function Box({ children }) {

	const [isOpen, setIsOpen] = useState(true);
	return (
		<div className="box">
			<button
				className="btn-toggle"
				onClick={() => setIsOpen((open) => !open)}
			>
				{isOpen ? "–" : "+"}
			</button>
			{isOpen && children}
		</div>
	)
}

// function Box({element}) {

// 	const [isOpen, setIsOpen] = useState(true);
// 	return (
// 		<div className="box">
// 			<button
// 				className="btn-toggle"
// 				onClick={() => setIsOpen((open) => !open)}
// 			>
// 				{isOpen ? "–" : "+"}
// 			</button>
// 			{isOpen &&  element }
// 		</div>
// 	)
// }

function MovieList({ movies, onSelectMovie }) {

	return (
		<ul className="list">
			{movies?.map((movie) => <Movie movie={movie} onSelectMovie={onSelectMovie} key={movie.imdbID}></Movie>)}
		</ul>
	)
}

function Movie({ movie, onSelectMovie }) {
	return (
		<li onClick={() => { onSelectMovie(movie.imdbID) }}>
			<img src={movie.Poster} alt={`${movie.Title} poster`} />
			<h3>{movie.Title}</h3>
			<div>
				<p>
					<span>🗓</span>
					<span>{movie.Year}</span>
				</p>
			</div>
		</li>
	)
}


function WatchedSummery({ watched }) {
	const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
	const avgUserRating = average(watched.map((movie) => movie.userRating));
	const avgRuntime = average(watched.map((movie) => movie.runtime));
	return (
		<div className="summary">
			<h2>Movies you watched</h2>
			<div>
				<p>
					<span>#️⃣</span>
					<span>{watched.length} movies</span>
				</p>
				<p>
					<span>⭐️</span>
					<span>{avgImdbRating}</span>
				</p>
				<p>
					<span>🌟</span>
					<span>{avgUserRating}</span>
				</p>
				<p>
					<span>⏳</span>
					<span>{avgRuntime} min</span>
				</p>
			</div>
		</div>
	)
}

function WatchedMovieList({ watched, onDeleteWatched }) {
	return (
		<ul className="list list-movies" >
			{watched.map((movie) => <WatchedMovie movie={movie} onDeleteWatched={onDeleteWatched} key={movie.imdbID}></WatchedMovie>)}
		</ul>
	)
}

function WatchedMovie({ movie,  onDeleteWatched }) {
	return (
		<li >
			<img src={movie.poster} alt={`${movie.title} poster`} />
			<h3>{movie.title}</h3>
			<div>
				<p>
					<span>⭐️</span>
					<span>{movie.imdbRating}</span>
				</p>
				<p>
					<span>🌟</span>
					<span>{movie.userRating}</span>
				</p>
				<p>
					<span>⏳</span>
					<span>{movie.runtime} min</span>
				</p>
			</div>
			<button className="btn-delete" onClick={() => onDeleteWatched(movie.imdbID)} > X </button>
		</li>
	)
}

function MovieDetails({ selectedId, onCloseMovie, onAddWatched, watched }) {

	const [isLoading, setIsLoading] = useState(false);
	const [movie, setMovie] = useState({});
	const [userRating, setUserRating] = useState("");

	const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
	const watchedUserRating = watched.find( (movie) => movie.imdbID === selectedId )?.userRating;

	function handleAdd() {
		const newWatchedMovie = {
			imdbID: selectedId,
			title,
			year,
			poster,
			imdbRating: Number(imdbRating),
			runtime: Number(runtime.split(" ").at(0)),
			userRating,
			// countRatingDecisions: countRef.current,
		};

		onAddWatched(newWatchedMovie);
		onCloseMovie();

		// setAvgRating(Number(imdbRating));
		// setAvgRating((avgRating) => (avgRating + userRating) / 2);
	}

	const {
		Title: title,
		Year: year,
		Poster: poster,
		Runtime: runtime,
		imdbRating: imdbRating,
		Plot: plot,
		Released: released,
		Actor: actors,
		Director: director,
		Genre: genre
	} = movie;

	useEffect(

		function () {

			function callback(e) {
				if (e.code === "Escape") {
					onCloseMovie();
				}
			}

			document.addEventListener("keydown", callback);

			return function () {
				document.removeEventListener("keydown", callback);
			};
		},

		[ onCloseMovie ]
	);


	useEffect(() => {
		setIsLoading(true);
		async function getMovieDetails() {
			const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`);
			const data = await res.json();	
			setMovie(data);
		}

		getMovieDetails();
		setIsLoading(false);
	}, [ selectedId ]);

	
	useEffect(
		function () {
			if (!title) return;
			document.title = `Movie | ${title}`;

			return function () {
				document.title = "usePopcorn";
				// console.log(`Clean up effect for movie ${title}`);
			};
		},
		[title]
	);


	return (
		<div className='details'>
			{
				isLoading ? <Loader></Loader> :

				<>
					<header>
						<button className="btn-back" onClick={onCloseMovie}>
							&larr;
						</button>
						<img src={poster} alt={`Poster of ${movie} movie`} />
						<div className="details-overview">
							<h2>{title}</h2>
							<p>
								{released} &bull; {runtime}
							</p>
							<p>{genre}</p>
							<p>
								<span>⭐️</span>
								{imdbRating} IMDb rating
							</p>
						</div>
					</header>
					<section>
							<div className="rating">
								{!isWatched ? (
									<>
										<StarRating
											maxRating={10}
											size={24}
											onSetRating={setUserRating}
										/>
										{userRating > 0 && (
											<button className="btn-add" onClick={handleAdd}>
												+ Add to list
											</button>
										)}
									</>
								) : (
									<p>
										You rated this movie {watchedUserRating} <span>⭐️</span>
									</p>
								)}
							</div>
						<p>
							<em>{plot}</em>
						</p>
						<p>Starring {actors}</p>
						<p>Directed by {director}</p>
					</section>
				</>
			}

		</div>
	)
}