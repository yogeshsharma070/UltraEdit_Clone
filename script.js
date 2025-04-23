document.getElementById("section_four_2_2").style.display = "none";
document.getElementById("list_2").style.display = "none";
document.getElementById("section_four_box2").style.width = "330px";
document.getElementById("section_four_box1").style.width = "770px";
document.querySelector(".section_four").style.flexDirection = "row";


document.getElementById("section_four_box2").addEventListener("mouseenter", function () {
    document.getElementById("section_four_2").style.display = "none";
    document.getElementById("list_1").style.display = "none";

    document.getElementById("btn_transition").style.transform = "translatey(-100px)";
    document.getElementById("btn_transition").style.transition = "transform 0.7s ease";
    document.getElementById("p_transition").style.transform = "translatey(370px)";
    document.getElementById("p_transition").style.transition = "transform 0.7s ease";

    document.getElementById("p_transition_1").style.transform = "translatey(-320px)";
    document.getElementById("p_transition_1").style.transition = "transform 0.7s ease";

    document.getElementById("section_four_2_2").style.display = "block";
    document.getElementById("list_2").style.display = "block";

    document.getElementById("list_2").style.transform = "translatey(70px)";
    document.getElementById("list_2").style.transition = "transform 0.7s ease";



    document.getElementById("section_four_box2").style.width = "770px";
    document.getElementById("section_four_box1").style.width = "330px";
    document.getElementById("section_four_box2").style.transition = "width 0.7s ease";
    document.getElementById("section_four_box1").style.transition = "width 0.7s ease";

    document.getElementById("section_four_2_2").style.transition = "transform 0.7s ease";

    document.getElementById("section_four_img_1").style.transform = "scale(0)";
    document.getElementById("section_four_img_1").style.transition = "transform 0.6s ease";

    document.getElementById("section_four_img_2").style.transform = "scale(1)";
    document.getElementById("section_four_img_2").style.transition = "transform 0.6s ease";


})
document.getElementById("section_four_box2").addEventListener("mouseleave", function () {
    document.getElementById("section_four_2").style.display = "block";
    document.getElementById("list_1").style.display = "block";

    document.getElementById("btn_transition").style.transform = "translatey(0)";
    document.getElementById("p_transition").style.transform = "translatey(0px)";
    document.getElementById("btn_transition").style.transition = "transform 0.7s ease";
    document.getElementById("p_transition").style.transition = "transform 0.7s ease";

    document.getElementById("p_transition_1").style.transform = "translatey(0px)";
    document.getElementById("p_transition_1").style.transition = "transform 0.7s ease";

    document.getElementById("section_four_2_2").style.display = "none";
    document.getElementById("list_2").style.display = "none";

    document.getElementById("section_four_box2").style.width = "330px";
    document.getElementById("section_four_box1").style.width = "770px";
    document.getElementById("section_four_box2").style.transition = "width 0.7s ease";
    document.getElementById("section_four_box1").style.transition = "width 0.7s ease";

    document.getElementById("section_four_2").style.transition = "transform 0.7s ease";

    document.getElementById("section_four_img_1").style.transform = "scale(1)";
    document.getElementById("section_four_img_1").style.transition = "transform 0.6s ease";

    document.getElementById("section_four_img_2").style.transform = "scale(0)";
    document.getElementById("section_four_img_2").style.transition = "transform 0.6s ease";


})



document.getElementById("nav_for_business").addEventListener("mouseenter", function () {
    document.querySelector(".drop_for_business").style.display = "block";
    document.querySelector(".drop_for_business").style.transition = "all 0.4s ease-in-out";
})
document.getElementById("nav_for_business").addEventListener("mouseleave", function () {
    document.querySelector(".drop_for_business").style.display = "none";
    document.querySelector(".drop_for_business").style.transition = "all 0.2s ease-in"
})
document.querySelector(".drop_for_business").addEventListener("mouseenter", function () {
    document.querySelector(".drop_for_business").style.display = "block";
})
document.querySelector(".drop_for_business").addEventListener("mouseleave", function () {
    document.querySelector(".drop_for_business").style.display = "none";
})



document.getElementById("nav_products").addEventListener("mouseenter", function () {
    document.querySelector(".drop_products").style.display = "block";
    document.querySelector(".drop_products").style.transition = "all 0.4s ease-in-out";
})
document.getElementById("nav_products").addEventListener("mouseleave", function () {
    document.querySelector(".drop_products").style.display = "none";
    document.querySelector(".drop_products").style.transition = "all 0.2s ease-in";
})
document.querySelector(".drop_products").addEventListener("mouseenter", function () {
    document.querySelector(".drop_products").style.display = "block";
})
document.querySelector(".drop_products").addEventListener("mouseleave", function () {
    document.querySelector(".drop_products").style.display = "none";
})



document.getElementById("nav_resources").addEventListener("mouseenter", function () {
    document.querySelector(".drop_resources").style.display = "block";
    document.querySelector(".drop_resources").style.transition = "all 0.4s ease-in-out";
})
document.getElementById("nav_resources").addEventListener("mouseleave", function () {
    document.querySelector(".drop_resources").style.display = "none";
    document.querySelector(".drop_resources").style.transition = "all 0.2s ease-in";
})
document.querySelector(".drop_resources").addEventListener("mouseenter", function () {
    document.querySelector(".drop_resources").style.display = "block";
})
document.querySelector(".drop_resources").addEventListener("mouseleave", function () {
    document.querySelector(".drop_resources").style.display = "none";
})



document.getElementById("nav_support").addEventListener("mouseenter", function () {
    document.querySelector(".drop_support").style.display = "block";
    document.querySelector(".drop_support").style.transition = "all 0.4s ease-in-out";
})
document.getElementById("nav_support").addEventListener("mouseleave", function () {
    document.querySelector(".drop_support").style.display = "none";
    document.querySelector(".drop_support").style.transition = "all 0.2s ease-in";
})
document.querySelector(".drop_support").addEventListener("mouseenter", function () {
    document.querySelector(".drop_support").style.display = "block";
})
document.querySelector(".drop_support").addEventListener("mouseleave", function () {
    document.querySelector(".drop_support").style.display = "none";
})



document.getElementById("nav_our_company").addEventListener("mouseenter", function () {
    document.querySelector(".drop_our_company").style.display = "block";
    document.querySelector(".drop_our_company").style.transition = "all 0.4s ease-in-out";
})
document.getElementById("nav_our_company").addEventListener("mouseleave", function () {
    document.querySelector(".drop_our_company").style.display = "none";
    document.querySelector(".drop_our_company").style.transition = "all 0.2s ease-in";
})
document.querySelector(".drop_our_company").addEventListener("mouseenter", function () {
    document.querySelector(".drop_our_company").style.display = "block";
})
document.querySelector(".drop_our_company").addEventListener("mouseleave", function () {
    document.querySelector(".drop_our_company").style.display = "none";
})




document.getElementById("nav_lang").addEventListener("mouseenter", function () {
    document.querySelector(".drop_lang").style.display = "block";
    document.querySelector(".drop_lang").style.transition = "all 0.4s ease-in-out";
})
document.getElementById("nav_lang").addEventListener("mouseleave", function () {
    document.querySelector(".drop_lang").style.display = "none";
    document.querySelector(".drop_lang").style.transition = "all 0.2s ease-in";
})
document.querySelector(".drop_lang").addEventListener("mouseenter", function () {
    document.querySelector(".drop_lang").style.display = "block";
})
document.querySelector(".drop_lang").addEventListener("mouseleave", function () {
    document.querySelector(".drop_lang").style.display = "none";
})






document.getElementById("nav_search").addEventListener("click", (event) => {
    event.preventDefault()
    if (window.innerWidth >= 981) {


        document.getElementById("nav_products").style.transition = "transform 0.7s ease";
        document.getElementById("nav_products").style.transform = "translateY(70px)";
        setTimeout(() => {
            document.getElementById("nav_products").style.display = "none";
        }, 400);

        document.getElementById("nav_for_business").style.transition = "transform 0.7s ease";
        document.getElementById("nav_for_business").style.transform = "translateY(70px)";
        setTimeout(() => {
            document.getElementById("nav_for_business").style.display = "none";
        }, 400);

        document.getElementById("nav_resources").style.transition = "transform 0.7s ease";
        document.getElementById("nav_resources").style.transform = "translateY(70px)";
        setTimeout(() => {
            document.getElementById("nav_resources").style.display = "none";
        }, 400);

        document.getElementById("nav_support").style.transition = "transform 0.7s ease";
        document.getElementById("nav_support").style.transform = "translateY(70px)";
        setTimeout(() => {
            document.getElementById("nav_support").style.display = "none";
        }, 400);

        document.getElementById("nav_our_company").style.transition = "transform 0.7s ease";
        document.getElementById("nav_our_company").style.transform = "translateY(70px)";
        setTimeout(() => {
            document.getElementById("nav_our_company").style.display = "none";
        }, 400);

        document.getElementById("nav_lang").style.transition = "transform 0.7s ease";
        document.getElementById("nav_lang").style.transform = "translateY(70px)";
        setTimeout(() => {
            document.getElementById("nav_lang").style.display = "none";
        }, 400);

        document.getElementById("nav_search").style.transition = "transform 0.7s ease";
        document.getElementById("nav_search").style.transform = "translateY(70px)";
        setTimeout(() => {
            document.getElementById("nav_search").style.display = "none";
        }, 400);

        document.getElementById("search_bar_showing").style.display = "inline-block";
        setTimeout(() => {
            document.getElementById("search_bar_showing").style.transition = "transform 0.7s ease";
            document.getElementById("search_bar_showing").style.transform = "translateY(60px)";
        }, 400);
    }
})


document.getElementById("search_close").addEventListener("click", (event) => {
    if (window.innerWidth >= 981) {
        event.preventDefault()

        document.getElementById("nav_products").style.display = "flex";
        setTimeout(() => {
            document.getElementById("nav_products").style.transition = "transform 0.7s ease";
            document.getElementById("nav_products").style.transform = "translateY(0px)";
        }, 400);

        document.getElementById("nav_for_business").style.display = "flex";
        setTimeout(() => {
            document.getElementById("nav_for_business").style.transition = "transform 0.7s ease";
            document.getElementById("nav_for_business").style.transform = "translateY(0px)";
        }, 400);

        document.getElementById("nav_resources").style.display = "flex";
        setTimeout(() => {
            document.getElementById("nav_resources").style.transition = "transform 0.7s ease";
            document.getElementById("nav_resources").style.transform = "translateY(0px)";
        }, 400);

        document.getElementById("nav_support").style.display = "flex";
        setTimeout(() => {
            document.getElementById("nav_support").style.transition = "transform 0.7s ease";
            document.getElementById("nav_support").style.transform = "translateY(0px)";
        }, 400);

        document.getElementById("nav_our_company").style.display = "flex";
        setTimeout(() => {
            document.getElementById("nav_our_company").style.transition = "transform 0.7s ease";
            document.getElementById("nav_our_company").style.transform = "translateY(0px)";
        }, 400);

        document.getElementById("nav_lang").style.display = "flex";
        setTimeout(() => {
            document.getElementById("nav_lang").style.transition = "transform 0.7s ease";
            document.getElementById("nav_lang").style.transform = "translateY(0px)";
        }, 400);

        document.getElementById("nav_search").style.display = "flex";
        setTimeout(() => {
            document.getElementById("nav_search").style.transition = "transform 0.7s ease";
            document.getElementById("nav_search").style.transform = "translateY(0px)";
        }, 400);


        document.getElementById("search_bar_showing").style.transition = "transform 0.7s ease";
        document.getElementById("search_bar_showing").style.transform = "translateY(0px)";
        setTimeout(() => {
            document.getElementById("search_bar_showing").style.display = "none";
        }, 400);



    }
})








document.getElementById("nav_search").addEventListener("click", (event) => {
    event.preventDefault()
    if (window.innerWidth <= 980) {


        document.getElementById("nav_search").style.transition = "transform 0.7s ease";
        document.getElementById("nav_search").style.transform = "translateY(70px)";
        setTimeout(() => {
            document.getElementById("nav_search").style.display = "none";
        }, 400);

        document.getElementById("menu").style.transition = "transform 0.7s ease";
        document.getElementById("menu").style.transform = "translateY(70px)";
        setTimeout(() => {
            document.getElementById("menu").style.display = "none";
        }, 400);

        document.getElementById("search_bar_showing").style.display = "inline-block";
        setTimeout(() => {
            document.getElementById("search_bar_showing").style.transition = "transform 0.7s ease";
            document.getElementById("search_bar_showing").style.transform = "translateY(60px)";
        }, 400);

    }
})


document.getElementById("search_close").addEventListener("click", (event) => {
    event.preventDefault()
    if (window.innerWidth <= 980) {


        document.getElementById("nav_search").style.display = "flex";
        setTimeout(() => {
            document.getElementById("nav_search").style.transition = "transform 0.7s ease";
            document.getElementById("nav_search").style.transform = "translateY(0px)";
        }, 400);

        document.getElementById("menu").style.display = "flex";
        setTimeout(() => {
            document.getElementById("menu").style.transition = "transform 0.7s ease";
            document.getElementById("menu").style.transform = "translateY(0px)";
        }, 400);

        document.getElementById("search_bar_showing").style.transition = "transform 0.7s ease";
        document.getElementById("search_bar_showing").style.transform = "translateY(0px)";
        setTimeout(() => {
            document.getElementById("search_bar_showing").style.display = "none";
        }, 400);
    }
})






document.getElementById("menu").addEventListener("click", () => {
    if (document.getElementById("menu_show").style.display === "block") {
        document.getElementById("menu_show").style.display = "none";

    }
    else {
        document.getElementById("menu_show").style.display = "block";
    }

})


