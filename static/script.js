fetch("https://api.npoint.io/662ddff4e44b520c878f", {}).then(
    response => response.json()
).then(
    result => {
        if (!result)
            return;

        let lang = document.documentElement.lang.toUpperCase();

        if (result[lang]["thoughts"]) {
            $("#thoughts_block").show();
            $("#thoughts_text").text(result[lang]["thoughts"]["text"]);
        }
    }
);

$(document).ready(function() {
    $("body").flurry({
        character: ["~"],
        height: 640,
        onFlake: function () {
            $(this).html(
                '<img width="25" height="25" src="https://uw935.com/static/images/emojicons/confetti@2x.png" alt="🎉">'
            );
        },
        large: 20,
        frequency: 50,
        speed: 3000
    });
});
