import Realm from 'realm';
import TestModel from '../modules/Test/TestModel';
import QuestionModel from '../modules/Question/QuestionModel';
import AnswerModel from '../modules/Answer/AnswerModel';
import ResultModel from '../modules/Result/ResultModel';
import ProfileModel from '../modules/Profile/ProfileModel';

export const RealmClient = new Realm({schema: [
    TestModel.schema,
    QuestionModel.schema,
    AnswerModel.schema, 
    ResultModel.schema,
    ProfileModel.schema, 
]})