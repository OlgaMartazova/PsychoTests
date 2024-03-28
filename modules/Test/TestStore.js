import { makeAutoObservable } from "mobx"
import TestService from "./TestService"

export class TestStore {
    testService
    loading = false;
    tests = []
    test = null

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

    setLoading = (value) => {
        this.loading = value;
    };

    setTests = (value) => {
        this.tests = value;
    };

    setTest = (value) => {
        this.test = value
    }
}