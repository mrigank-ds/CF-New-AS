import * as React from "react";
import { useSearchActions, useSearchState} from "@yext/search-headless-react";
import { useEffect } from "react";

let SearchQuery: any = useSearchState(state => state.query.input);
  // console.log(SearchQuery,"SearchQuery");
  const queryString: any = window.location.search;
  let urlParams: any = new URLSearchParams(queryString);
  
     
      
  const product = urlParams.get('query');
  const answersActions = useSearchActions();


  useEffect(() => {
    if (product != null) {
      answersActions.setQuery(product)
    }
    else {

      if (SearchQuery != '' && SearchQuery != null) {
        updateParam(SearchQuery)
      } else {
        updateParam('')
      }

    }
  }, []);



  useEffect(() => {
    if (SearchQuery != '' && SearchQuery != null) {
      updateParam(SearchQuery)
    } else {
      updateParam('')
    }
  }, [SearchQuery])


  export default function updateParam(latestUserInput: any) {
    var paramValue = latestUserInput; // Replace with your updated value
    var searchParams = new URLSearchParams(window.location.search);
    searchParams.set('query', paramValue);
    var newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + searchParams.toString();
    console.log(newUrl,"newUrl");
    window.history.replaceState({}, '', newUrl);

    return(
        <>
                <h1>Replaces Query param</h1>
        </>
    )
  }