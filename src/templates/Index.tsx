import * as React from "react";
import {
  Template,
  GetPath,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
  TemplateProps,
  TemplateConfig,
} from "@yext/pages";
import "../index.css";
import {
  SearchHeadlessProvider,
  provideHeadless,
  HeadlessConfig,
  SandboxEndpoints,
  useSearchState,
} from "@yext/search-headless-react";
import {
  SearchBar,
  StandardCard,
  VerticalResults,
  SpellCheck,
  ResultsCount,
  Pagination,
  AlternativeVerticals,
  AppliedFilters,
  DirectAnswer,
  LocationBias,  
} from "@yext/search-ui-react";
import { universalResultsConfig } from '../config/universalResultsConfig';
import UniversalResults from '../components/UniversalResults';
import Navigation from '../components/Navigation';
import PageLayout from "../components/PageLayout";
import { answersHeadlessConfig } from '../config/answersHeadlessConfig';
import usePageSetupEffect from "../hooks/usePageSetupEffect";
import Header from "../components/commons/header";
import Footer from "../components/commons/footer";
import { useAnswersState, useAnswersActions } from "@yext/answers-headless-react";
import updateParam from "../components/commons/GetQuery";


export const config: TemplateConfig = {
  stream: {
    $id: "helpArticle",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityIds: ["help-site-header-footer"] 
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en_GB"],
      primary: false,
    },
  },
};

const universalResultsFilterConfig = {
  show: false
};

console.log(universalResultsFilterConfig,"universalResultsFilterConfig");


/**
 * Not required depending on your use case.
 */
// export const config: TemplateConfig = {
//   stream: {
//     $id: "home",
//     // Specifies the exact data that each generated document will contain. This data is passed in
//     // directly as props to the default exported function.
//     fields: [
//       "id",
//       "uid",
//       "meta",
//       "name",
//     ],
//     // Defines the scope of entities that qualify for this stream.
//     filter: {
//       entityIds: ["global-data"] 
//     },
//     // The entity language profiles that documents will be generated for.
//     localization: {
//       locales: ["en_GB"],
//       primary: false,
//     },
//   },
// };

export const getPath: GetPath<TemplateProps> = () => {
  return "/index.html";
};


export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: `Community Fibre | AS`,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const searcher = provideHeadless(answersHeadlessConfig);

const IndexPage: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {

 const {
  _site
 } = document
let headerProps = _site.c_header_links;
//  console.log(_site);

// // URL code - Starts

// let SearchQuery: any = useAnswersState(state => state.query.input);
//   // console.log(SearchQuery,"SearchQuery");
//   const queryString: any = window.location.search;
//   let urlParams: any = new URLSearchParams(queryString);
  
     
      
//   const product = urlParams.get('query');
//   const answersActions = useAnswersActions();


//   React.useEffect(() => {
//     if (product != null) {
//       answersActions.setQuery(product)
//     }
//     else {

//       if (SearchQuery != '' && SearchQuery != null) {
//         updateParam(SearchQuery)
//       } else {
//         updateParam('')
//       }

//     }
//   }, []);



//   React.useEffect(() => {
//     if (SearchQuery != '' && SearchQuery != null) {
//       updateParam(SearchQuery)
//     } else {
//       updateParam('')
//     }
//   }, [SearchQuery])


//   function updateParam(latestUserInput: any) {
//     var paramValue = latestUserInput; // Replace with your updated value
//     var searchParams = new URLSearchParams(window.location.search);
//     searchParams.set('query', paramValue);
//     var newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + searchParams.toString();
//     window.history.replaceState({}, '', newUrl);
//   }
// // URL code - ends



  return (
    <>
    <Header headerLinks={headerProps} />
    <SearchHeadlessProvider searcher={searcher}>
     <div className="px-4 py-8">
        <div className="mx-auto flex max-w-5xl flex-col">
          <SearchBar placeholder='Search...' />
          
          <Navigation />
          <SpellCheck />
          <DirectAnswer />
          <UniversalResults
            appliedFiltersConfig={universalResultsFilterConfig}
            verticalConfigs={universalResultsConfig}
          />
        </div>
        <Pagination />
      </div>
    </SearchHeadlessProvider>
    <Footer helpAndSupport={_site.c_useful_links} />
    </>
  );
};

export default IndexPage;


