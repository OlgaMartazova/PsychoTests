import { RealmClient } from "../../utils/Realmclient"
import { QuestionTable } from "../Question/QuestionModel"
import { TestTable } from "./TestModel"

export default class TestService {
    getTests = () => {
        return RealmClient.objects(TestTable)
    }

    getTestById = (id) => {
        return RealmClient.objectForPrimaryKey(TestTable, id)
    }
}