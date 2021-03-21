player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_name").innerHTML = player1_score;
document.getElementById("player2_name").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;


function send() {
    get_question = document.getElementById("question").value;
    question = get_question.toLowerCase();
    console.log("question in lowercase = " + question);

    charAt1 = question.charAt(1);
    console.log(charAt1);

    length_divide_2 = Math.floor(question.length_divide/2);
    charAt2 = word.charAt(length_divide_2);
    console.log(charAt2);

    length_minus_1 = question.length - 1;
    charAt3 = question.charAt(length_minus_1);
    console.log(charAt3)

    remove_charAt1 = question.replace(charAt1, "__");
    remove_charAt2 = remove_charAt1.replace(charAt2, "__");
    remove_charAt3 = remove_charAt2.replace(charAt3, "__");
    console.log(remove_charAt3);

    question_mulitply = "<h4 id='word_question'> Q.  "+remove_charAt3+"</h4>";
    input_box = "<br> Answer : <input type='text' id='input_check_box'>";
    row = question_multiply+input_box+check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("question").value = "";
}
