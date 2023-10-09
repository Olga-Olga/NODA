import * as movies from "./movies/index";

console.log(movieService);

const invokeAction = asynk ({ action }) => {
    switch (action) {
        case "list":
            const allMovies = await movieService.getAllMovies()
            return console.log(allMovies);
            // break;
    }

}

invokeAction ({action: "list"})