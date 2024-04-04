/*
* Exercice: Passing Grade Average
*
* Create a program that takes an
* array of grades as input and
* calculates the average only for
* passing grades (greater than or
* equal to 70).
*
* */

function main() {

    // Generando Array de notas
    const grades = []
    while (grades.length <= 9) {

        grades.push(Math.floor(Math.random() * 101))
    }
    console.log("Grades: ", grades)

    // Obteniendo los aprobados
    const passingGrades = grades.filter(grade => grade >= 70)
    console.log("passingGrades: ", passingGrades.length > 0
        ? passingGrades
        : "No hubo aprobados")

    // Obteniendo Nota Promedio de aprobados
    const averagePassingGrade = passingGrades.length > 0
        ? passingGrades.reduce((sum, grade) => sum + grade, 0) / passingGrades.length
        : "No hubo aprobados"

    console.log("averagePassingGrade: ", averagePassingGrade)
}

document.addEventListener('DOMContentLoaded', main)