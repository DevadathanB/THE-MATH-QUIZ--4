player_1 = localStorage.getItem("name1");
player_2 = localStorage.getItem("name2");

player1_score = 0;
player2_score = 0;

document.getElementById("player_1").innerHTML = player_1 + " : ";
document.getElementById("player_2").innerHTML = player_2 + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player1_score;

function send() {
    get_word = document.getElementById("text").value;

    if (get_word == "") {
        alert("Please enter word to guess");
    } else {
        word = get_word.toLowerCase();

        charAt1 = word.charAt(1);
        console.log(charAt1);

        length_divide_2 = Math.floor(word.length / 2);
        charAt2 = word.charAt(length_divide_2);
        console.log(charAt2);

        length_mius_1 = word.length - 1;
        charAt3 = word.charAt(length_mius_1);
        console.log(charAt3);

        remove_charAt1 = word.replace(charAt1, "_");
        remove_charAt2 = remove_charAt1.replace(charAt2, "_");
        remove_charAt3 = remove_charAt2.replace(charAt3, "_");
        console.log(remove_charAt3);

        question_word = "<h4 id='word_display'> Q." + remove_charAt3 + "</h4>";
        inpu_box = "<br> Answer : <input type='text' id='input_check_box'>";
        check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
        row = question_word + inpu_box + check_button;
        document.getElementById("output").innerHTML = row;
        document.getElementById("text").value = "";
    }
}
question_turn = "player1";
answer_turn = "player2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();

    if (answer == word) {
        if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;

        } else
            player2_score = player2_score + 1;
        document.getElementById("player2_score").innerHTML = player2_score;
    }
    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("q").innerHTML = "Question turn - " + player_2;

    } else {
        question_turn = "player1";
        document.getElementById("q").innerHTML = "Question turn - " + player_1;
    }
    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("ans").innerHTML = "Answer turn - " + player_2;

    } else {
        answer_turn = "player1";
        document.getElementById("ans").innerHTML = "Answer turn - " + player_1;
    }
    document.getElementById("output").innerHTML = "";
}