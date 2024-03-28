import { makeAutoObservable } from "mobx"
import TestService from "./TestService"

export class TestStore {
    testService
    loading = false;
    tests = []
    test = null
    selectedResult = null
    profileData = null
    profile = []

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

    getProfile = (testId) => {
        this.setLoading(true)

        this.setProfile(this.testService.getProfiles().filter(p => p.testId == testId))

        this.setLoading(false)
    }

    getProfileData = () => {

        this.setLoading(true)

        const formatDate = (date) => {
            return date.toLocaleString('ru-Ru', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
            }).replace(',', '');
        };

        const date = this.profile[0].created_at
        const formattedDate = formatDate(date);

        this.chooseResult(this.profile[0].score_result, this.profile[0].testId)

        const result = `Вы прошли этот тест ${formattedDate}. \n\nРезультат теста: ${this.selectedResult.title}\n\n${this.selectedResult.description}`

        this.setProfileData(result)

        this.setLoading(false)
    }

    deleteProfile = () => {
        this.setLoading(true)

        this.testService.deleteProfile(this.profile)
        this.setProfile([])
        this.setProfileData(null)

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

    setProfileData = (value) => {
        this.profileData = value
    }

    setProfile = (value) => {
        this.profile = value
    }
}