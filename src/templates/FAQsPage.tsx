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

import { FaqCard } from '../components/cards/FaqCards';
import Navigation from '../components/Navigation';
import PageLayout from "../components/PageLayout";
import { answersHeadlessConfig } from '../config/answersHeadlessConfig';

export const config: TemplateConfig = {
  stream: {
    $id: "faqPage",
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
      entityIds: ["global-data"] 
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en_GB"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = () => {
  return "/faqs";
};

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: `Turtlehead Tacos Search`,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};


answersHeadlessConfig.verticalKey = "faqs";
const searcher = provideHeadless(answersHeadlessConfig);

const FAQsPage: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {

  

  return (
    // <PageLayout _site={_site}>
    <SearchHeadlessProvider searcher={searcher}>
      <div className="px-4 py-8">
        <div className="mx-auto flex max-w-5xl flex-col">
			<SearchBar placeholder='Search...' />
      <Navigation />
			<DirectAnswer />
			<SpellCheck />
			<ResultsCount />
			<AppliedFilters hiddenFields={['builtin.entityType']} />			
			<VerticalResults CardComponent={FaqCard} />
			<LocationBias />
        </div>
        <Pagination />
      </div>
    </SearchHeadlessProvider>
    // </PageLayout>
  );
};

export default FAQsPage;
