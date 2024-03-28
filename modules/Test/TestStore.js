import { makeAutoObservable } from "mobx"
import TestService from "./TestService"

export class TestStore {
    testService
    loading = false;
    tests = []
    test = null
    selectedResult = null

    constructor() {
        makeAutoObservable(this)
        this.testService = new TestService()
    }

    getTests = () => {
        this.setLoading(true);

        this.setTests(this.testService.getTests())

        this.setLoading(false);
    }

    getTestById = (id) => {
        this.setLoading(true)

        this.setTest(this.testService.getTestById(id))

        this.setLoading(false)
    }

    addProfile = (score_result, testId) => {
        this.setLoading(true)

        this.testService.createProfile(score_result, testId)

        this.setLoading(false)
    }

    chooseResult = (score, testId) => {
        this.setLoading(true)

        this.getTestById(testId)

        const results = this.test.results
        for (let i = 0; i < results.length; i++) {
            const result = results[i];
            if (score >= result.min_score && score <= result.max_score) {
                this.setResult(result)
            }
        }

        this.setLoading(false)
    }

    setLoading = (value) => {
        this.loading = value;
    };

    setTests = (value) => {
        this.tests = value;
    };

    setTest = (value) => {
        this.test = value
    }

    setResult = (value) => {
        this.selectedResult = value
    }
}