
import {
  provideHeadless,
  HeadlessConfig,
  SandboxEndpoints,
} from "@yext/search-headless-react";

export let answersHeadlessConfig: HeadlessConfig = {
  apiKey: "644ed913e3b822ad4c901a5e8a8593aa",
  experienceKey: "answer-experience-help-site",
  locale: "en_GB",
  sessionTrackingEnabled: true,
  // endpoints: {
  //   universalSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/query",
  //   verticalSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/query",
  //   questionSubmission: "https://liveapi-sandbox.yext.com/v2/accounts/me/createQuestion",
  //   universalAutocomplete: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/autocomplete",
  //   verticalAutocomplete: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/autocomplete",
  //   filterSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/filtersearch"
  // },
};

/*
type HeadlessProviderProps = Parameters<typeof AnswersHeadlessProvider>[0];

export const answersHeadlessConfig: HeadlessProviderProps = {
  apiKey: 'ecbf37a4304b6b390687f68f697210e5',
  experienceKey: 'mgm-timber-m',
  locale: 'en',
  sessionTrackingEnabled: true,
  endpoints: {
    universalSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/query",
    verticalSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/query",
    questionSubmission: "https://liveapi-sandbox.yext.com/v2/accounts/me/createQuestion",
    universalAutocomplete: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/autocomplete",
    verticalAutocomplete: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/autocomplete",
    filterSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/filtersearch"
  }
};
*/