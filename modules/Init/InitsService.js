import { testsMock } from "../../mocks/TestsMock"
import { RealmClient } from "../../utils/Realmclient"
import { AnswerTable } from "../Answer/AnswerModel"
import { QuestionTable } from "../Question/QuestionModel"
import { ResultTable } from "../Result/ResultModel"
import { TestTable } from "../Test/TestModel"
import InitRepository from "./InitRepository"

export default class InitService {
    initRepository

    constructor() {
        this.initRepository = new InitRepository()
    }

    getData = async () => {
        return this.initRepository.getItems()
    }

    setData = async (isFirstTime) => {
        return this.initRepository.setItems(isFirstTime)
    }

    removeData = async () => {
        return this.initRepository.removeItems()
    }

    populateDatabase = () => {
        const testData = testsMock;

        RealmClient.write(() => {
            testData.forEach((testItem) => {
                const test = RealmClient.create(TestTable, {
                    id: testItem.id,
                    name: testItem.name,
                    description: testItem.description,
                });

                testItem.questions.forEach((questionItem) => {
                    const question = RealmClient.create(QuestionTable, {
                        id: questionItem.id,
                        question: questionItem.text,
                    });

                    questionItem.answers.forEach((answerItem) => {
                        const answer = RealmClient.create(AnswerTable, {
                            id: answerItem.id,
                            answer: answerItem.text,
                            score: answerItem.score,
                        });
                        question.answers.push(answer);
                    });

                    test.questions.push(question);
                });

                testItem.results.forEach((resultItem) => {
                    const result = RealmClient.create(ResultTable, {
                        id: resultItem.id,
                        min_score: resultItem.min_score,
                        max_score: resultItem.max_score,
                        title: resultItem.title,
                        description: resultItem.description,
                        // test: testItem
                    });
                    test.results.push(result);
                });
            })
        })
    }
}