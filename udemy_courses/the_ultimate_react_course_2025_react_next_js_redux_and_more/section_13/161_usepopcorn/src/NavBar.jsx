import { useEffect, useRef, useState } from "react";

export default function NavBar({movies, query, setQuery}) {


    return (
        <nav className="nav-bar">
            <Logo></Logo>
            <Search query={query} setQuery={setQuery}></Search>
            <Numresult movies={movies}></Numresult>
        </nav>
    )
}

function Search({query, setQuery}) {
    const inputEl = useRef(null);

    useEffect(()=>{        

        function callback(e) {

            if (document.activeElement === inputEl.current) {
                return;
            }
            
            if(e.code === "Enter") {
                inputEl.current.focus();
                setQuery("");
            }            
        }

        document.addEventListener("keydown", callback);

        return () => document.removeEventListener("keydown", callback); 
    }, []);

    return (
        <input
            ref={inputEl}
            className="search"
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
    )
}

function Logo() {
    return (
        <div className="logo">
            <span role="img">🍿</span>
            <h1>usePopcorn</h1>
        </div>
    )
}

function Numresult({movies}) {
    return (
        <p className="num-results">
            Found <strong>{movies?.length || 0}</strong> results
        </p>
    )
}

