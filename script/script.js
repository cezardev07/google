

        const form = document.querySelector(".form");
        const search = document.querySelector(".fm-inp");
        //const btn = document.querySelector(".btn-search");
        const btn = document.getElementById("btn-search");

        btn.addEventListener("click", function(){
            if (search.value.length > 0) {
                window.location = "https://www.google.com.br/search?q=" + search.value;
                search.value = "";
            }else {
                form.classList.toggle("actived");
            }
        })

        const bt = document.getElementById("btn-search-two");
        bt.addEventListener("click", function(){
            if (search.value.length > 0) {
                window.location = "https://www.google.com.br/search?q=" + search.value;
                search.value = "";
            }else {
                form.classList.toggle("actived");
            }
        })


        document.addEventListener("keypress", function(e) {

            if (e.key === "Enter"){
                const btn = document.getElementById("btn-search-two");
                btn.click();
            }
        });