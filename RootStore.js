import React from "react"
import { InitStore } from "./modules/Init/InitStore"
import { TestStore } from "./modules/Test/TestStore"

class RootStore {
    initStore
    testStore

    constructor() {
        this.initStore = new InitStore()
        this.testStore = new TestStore()
    }
}

export const rootStore = new RootStore()

export const storesContext = React.createContext(rootStore)