fetch("https://api.npoint.io/662ddff4e44b520c878f", {}).then(
    response => response.json()
).then(
    result => {
        if (!result)
            return;

        let lang = document.documentElement.lang.toUpperCase();

        if (result[lang]["thoughts"]) {
            $("#thoughts_block").show()
            $("#thoughts_text").text(result[lang]["thoughts"]["text"]);
        }
    }
);