import { questionTypes, quiz } from '../types/quizTypes'

const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5)

export const QuizServices = async (questionsLimit: number, category: number, difficulty: string): Promise<questionTypes[]> => {
    console.log('hello from services')
    const api = await fetch(`https://opentdb.com/api.php?amount=${questionsLimit}&category=${category}&difficulty=${difficulty}&type=multiple`)
    const { results } = await api.json()
    const quiz: questionTypes[] = results.map((questionsObj: quiz) => {
        return {
            question: questionsObj.question,
            options: shuffleArray(questionsObj.incorrect_answers.concat(questionsObj.correct_answer)),
            answer: questionsObj.correct_answer
        }
    })
    return quiz;
}
