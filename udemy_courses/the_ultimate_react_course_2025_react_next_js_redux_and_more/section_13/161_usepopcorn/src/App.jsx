// ------------------------------------------------------------------
// Main App Structure
// ------------------------------------------------------------------
// - Imports
// - Utility Functions
// - App Component
//    - State
//    - Handlers
//    - Effects
//    - Render
// - Main
// - Loader
// - ErrorMessage
// - Box
// - MovieList / Movie
// - WatchedSummary
// - WatchedMovieList / WatchedMovie
// - MovieDetails
// ------------------------------------------------------------------

// ------------------------------------------------------------------
// Imports
// ------------------------------------------------------------------
import { useEffect, useRef, useState } from 'react'
import './App.scss'
import NavBar from './NavBar';
import StarRating from './StarRating';
import { useMovies } from './useMovies';

// ------------------------------------------------------------------
// Utility Functions
// ------------------------------------------------------------------
const average = (arr) =>
	arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const KEY = import.meta.env.VITE_OMDBAPI_KEY;

// ------------------------------------------------------------------
// App Component
// ------------------------------------------------------------------
export default function App() {

	// -- State ------------------------------------------------------

	const [query, setQuery] = useState("");
	const [selectedId, setSelectedId] = useState(null);

	const [watched, setWatched] = useState(function() {
		const storedValue = localStorage.getItem("watched");
		return JSON.parse(storedValue) ?? [];
	});
	

	const {movies, isLoading, error} = useMovies(query, handleCloseMovie)


	// -- Handlers ---------------------------------------------------
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

		// localStorage.setItem("watched", JSON.stringify([...watched, movie]))
	}

	function handleDeleteWatched(id) {
		setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
	}

	// -- Effects ----------------------------------------------------

	

	useEffect(function() {

		localStorage.setItem("watched", JSON.stringify(watched));

	}, [watched]);



	// -- Render -----------------------------------------------------
	return (
		<>
			<NavBar movies={movies} query={query} setQuery={setQuery}></NavBar>

			<Main >				
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

// ------------------------------------------------------------------
// Main Layout Component
// ------------------------------------------------------------------
function Main({ children }) {
	return (
		<main className="main">
			{children}
		</main>
	)
}

// ------------------------------------------------------------------
// Loader
// ------------------------------------------------------------------
function Loader() {
	return (
		<p className='loader'>Loading ...</p>
	)
}

// ------------------------------------------------------------------
// Error Message
// ------------------------------------------------------------------
function ErrorMessage({ message }) {
	return (
		<p className='error'>{message}</p>
	)
}

// ------------------------------------------------------------------
// Box (Collapsible Panel)
// ------------------------------------------------------------------
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

// ------------------------------------------------------------------
// Movie List & Movie Item
// ------------------------------------------------------------------
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

// ------------------------------------------------------------------
// Watched Movies Summary
// ------------------------------------------------------------------
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

// ------------------------------------------------------------------
// Watched Movie List & Item
// ------------------------------------------------------------------
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

// ------------------------------------------------------------------
// Movie Details Panel
// ------------------------------------------------------------------
function MovieDetails({ selectedId, onCloseMovie, onAddWatched, watched }) {

	const [isLoading, setIsLoading] = useState(false);
	const [movie, setMovie] = useState({});
	const [userRating, setUserRating] = useState("");	

	const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
	const watchedUserRating = watched.find( (movie) => movie.imdbID === selectedId )?.userRating;

	const countRef = useRef(0);

	function handleAdd() {
		const newWatchedMovie = {
			imdbID: selectedId,
			title,
			year,
			poster,
			imdbRating: Number(imdbRating),
			runtime: Number(runtime.split(" ").at(0)),
			userRating,
			countRatingDecisions: countRef.current,
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

	// -- Escape key to close details panel ---------------------------

	useEffect(()=>{
		if (userRating) {
			countRef.current = countRef.current + 1;
			console.log(">", countRef.current + 1)
		}
	}, [userRating]);

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

	// -- Fetch movie details -----------------------------------------
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

	// -- Set document title ------------------------------------------
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

	// -- Render ------------------------------------------------------
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
