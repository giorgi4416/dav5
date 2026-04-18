 const API_URL = "https://6910516145e65ab24ac65b19.mockapi.io/kino";

        async function loadMovies() {
            const list = document.getElementById("movie-list");
            list.innerHTML = "<p>იტვირთება...</p>";

            try {
                const response = await fetch(API_URL);
                const movies = await response.json();

                list.innerHTML = "";

                movies.forEach(movie => {
                    const div = document.createElement("div");
                    div.classList.add("card");

                   
                    if (movie.status === "hot") {
                        div.classList.add("hot");
                    } else {
                        div.classList.add("classic");
                    }

                  
                    if (movie.rating >= 8) {
                        div.classList.add("high-rating");
                    }

                    div.innerHTML = `
                        <h2>${movie.name}</h2>
                        <p><b>ჟანრი:</b> ${movie.genre}</p>
                        <p><b>რეიტინგი:</b> ${movie.rating}</p>
                        <p><b>სტატუსი:</b> ${movie.status}</p>
                    `;

                    list.appendChild(div);
                });

            } catch (error) {
                list.innerHTML = "<p style='color:red;'>შეცდომა მოხდა!</p>";
                console.error(error);
            }
        }
   




        loadMovies();