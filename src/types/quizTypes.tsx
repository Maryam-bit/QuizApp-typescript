export type quiz = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}

export type questionTypes = {
    question: string
    options: string[]
    answer: string
}