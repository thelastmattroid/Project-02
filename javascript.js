
            const searchForm = document.getElementById('search-form');
            const searchInput = document.getElementById('search-input');
            const apikey = "k6eFlq7csraVgt3DyLdryWKXnw2nIJCp";
            const pageSize = 12;
            let offset = 0;

            function handleClickSingle() {
                console.log("handleClickSingle called"); 
                const query = searchInput.value;
                let url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apikey}&limit=${pageSize}&offset=${offset}`;
                console.log('url=' + url);

            fetch(url, {method: "GET"})
                .then((response) => response.json())
                .then((json) => {
                    console.log(json.data[0].images.fixed_width.url);
                    const elementOutputArea = document.getElementById("outputArea");
                    let outputAreaHTML = "";

                    json.data.forEach(function(obj) {
                        console.log(obj.images.fixed_width);
                        const objURL = obj.images.fixed_width.url;
                        const width = obj.images.fixed_width.width;
                        const height = obj.images.fixed_width.height;
                        outputAreaHTML += `<img class="items" src="${objURL}" width="${width}" height="${height}">`
                    })

                    elementOutputArea.innerHTML = outputAreaHTML
                    
                })    
                }