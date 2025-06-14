import { Before } from 'cypress-cucumber-preprocessor/steps';
import { loginAndSetTokenViaAPI } from '../../bdd/helper/login';

Before({ tags: '@transaction' }, () => {
    return loginAndSetTokenViaAPI();
  });
