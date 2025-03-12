let text_field = document.getElementById("input")
let submit_btn = document.getElementById("submit")
let avg_btn = document.getElementById("avg")
let grades_txt = document.getElementById("grades_txt")
let average_txt = document.getElementById("avg_txt")

submit_btn.addEventListener("click", submit_grade)
avg_btn.addEventListener("click", calc_average)

const grades = []

function submit_grade() {
    let g = text_field.value;
    text_field.value = '';
    grades.push(g);
    grades_txt.textContent = "Grades : " + grades.toString();
}

function calc_average() {
    average_txt.textContent = "Average " + 100;
}
