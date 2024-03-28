import { makeAutoObservable } from "mobx"
import InitService from "./InitsService"

export class InitStore {
    initService

    constructor() {
        makeAutoObservable(this)
        this.initService = new InitService()
    }

    getFlag = async () => {
        return this.initService.getData()
    }

    setFlag = (flag) => {
        this.initService.setData(flag)
    }

    removeFlag = () => {
        this.initService.removeData()
    }

    populateDatabase = () => {
        this.initService.populateDatabase()
    }
}