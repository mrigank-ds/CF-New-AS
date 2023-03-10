import * as React from "react";
import {
  Template,
  GetPath,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
  TemplateProps,
  TemplateConfig
} from "@yext/pages";
import "../index.css";
import {
  SearchHeadlessProvider,
  provideHeadless,
  HeadlessConfig,
  SandboxEndpoints,
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
  LocationBias
} from "@yext/search-ui-react";

import { ArticlesCard } from '../components/cards/ArticlesCard';
import Navigation from '../components/Navigation';
import PageLayout from "../components/PageLayout";
import { answersHeadlessConfig } from '../config/answersHeadlessConfig';
import Header from "../components/commons/header";
import Footer from "../components/commons/footer";
import { ProviderSwitchingCard } from "../components/cards/ProviderSwitchingCard";

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


export const getPath: GetPath<TemplateProps> = () => {
  return "/provider_switching";
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

answersHeadlessConfig.verticalKey = "provider_switching";
const searcher = provideHeadless(answersHeadlessConfig);

const ArticlesPage: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {

const {
  _site
} = document;
let footerHelpMenu = _site.c_useful_links.headerLinksHeading;
let footerHElpSubMenus = _site.c_useful_links.links;
let headerProps = _site.c_header_links;
// console.log(_site.c_useful_links.headerLinksHeading,"Sites");
  // const {
  //   _site
  // } = document;

  
  return (
    <>
      <Header headerLinks={headerProps} />
      <SearchHeadlessProvider searcher={searcher}>
        <div className="px-4 py-8">
          <div className="mx-auto flex max-w-5xl flex-col">
            <SearchBar placeholder='Search...' />
            <Navigation />
            <DirectAnswer />
            <SpellCheck />
            <ResultsCount />
            <AppliedFilters hiddenFields={['builtin.entityType']} />
            <VerticalResults CardComponent={ProviderSwitchingCard} />
            <LocationBias />
          </div>
          <Pagination />
        </div>
      </SearchHeadlessProvider>
      <Footer helpAndSupport={_site.c_useful_links} />
    </>
  );


};

export default ArticlesPage;
