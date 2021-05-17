function addUser() {
    name_1 = document.getElementById("name1").value;
    name_2 = document.getElementById("name2").value;
    localStorage.setItem("name1", name_1);
    localStorage.setItem("name2", name_2);

    window.location = "game_page.html";
}