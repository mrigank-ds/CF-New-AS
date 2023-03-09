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


