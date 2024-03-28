import Realm, { ObjectSchema } from 'realm';
export const ProfileTable = 'Profile';

export default class ProfileModel extends Realm.Object {
  score_result
  created_at
  testId

  static schema = {
    name: ProfileTable,
    properties: {
      score_result: 'int',
      created_at: 'date',
      testId: 'int'
    }
  };
}