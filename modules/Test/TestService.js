import { RealmClient } from "../../utils/Realmclient"
import ProfileModel, { ProfileTable } from "../Profile/ProfileModel"
import { QuestionTable } from "../Question/QuestionModel"
import { TestTable } from "./TestModel"

export default class TestService {
    getTests = () => {
        return RealmClient.objects(TestTable)
    }

    getTestById = (id) => {
        return RealmClient.objectForPrimaryKey(TestTable, id)
    }

    createProfile = (score_result, testId) => {
        RealmClient.write(() => {
            RealmClient.create(ProfileTable, {
                score_result: score_result,
                created_at: new Date(),
                testId: testId
            })
        })
    }

    getProfiles = () => {
        return RealmClient.objects(ProfileTable)
    }

    deleteProfile = (profile) => {
        RealmClient.write(() => {
            RealmClient.delete(profile);
        });
    }
}