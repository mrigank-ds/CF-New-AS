import * as React from 'react';
import { useEffect, useState } from 'react';
import { CardProps } from '../../models/cardComponent';

export interface StandardCardConfig {
  showOrdinal?: boolean
}

export interface StandardCardProps extends CardProps {
  configuration: StandardCardConfig,
  customCssClasses?: StandardCardCssClasses
}

export interface StandardCardCssClasses {
  container?: string,
  header?: string,
  body?: string,
  descriptionContainer?: string,
  ctaContainer?: string,
  cta1?: string,
  cta2?: string,
  ordinal?: string,
  title?: string
}

const builtInCssClasses: StandardCardCssClasses = {
  container: 'flex flex-col justify-between border rounded-lg mb-4 p-4 shadow-sm ArticlesCardContainer',
  header: 'flex text-gray-800',
  body: 'flex justify-end pt-2.5',
  descriptionContainer: 'w-full text-base',
  ctaContainer: 'flex flex-col justify-end ml-4',
  cta1: 'min-w-max bg-blue-600 text-white font-medium rounded-lg py-2 px-5 shadow',
  cta2: 'min-w-max bg-white text-blue-600 font-medium rounded-lg py-2 px-5 mt-2 shadow',
  ordinal: 'mr-1.5 text-lg font-medium',
  title: 'font-bold ArticlesTitle'
}

interface CtaData { 
  label: string,
  link: string,
  linkType: string
}



/**
 * This Component renders the base result card.
 * 
 * @param props - An object containing the result itself.
 */
export function ArticlesCard(props: StandardCardProps): JSX.Element {
  const { configuration, result, customCssClasses } = props;
  const cssClasses = builtInCssClasses;

  const ArticleCard : any  = result.rawData;
  // console.log(ArticleCard,"ArticleCard");
  const ArticleDescription = ArticleCard.description ? ArticleCard.description : null;
  const ArticleImageUrl = ArticleCard.photoGallery ? ArticleCard.photoGallery[0].image.url : null ;
  const ArticleLandingPage = ArticleCard.landingPageUrl;

 function limit(string?: string, limit = 0) {
    return string?.substring(0, limit)
  }
 
  const greeting = limit(ArticleDescription, 200);
  // console.log(greeting, "greeting");

  const [categories_data, setFaq_Data] = useState([]);
  const [faqClass, setFaqClass] = useState("");
  const [leftFaqLen, setLeftFaqLen] = useState(0);
  const [rightFaqLen, setRightFaqLen] = useState(0);
  const [selected, setselected] = useState(null);

  const isShowContent = (e: any, index: any) => {
    setselected(index);
    let parent = e.target.parentNode;
    if (parent.classList.contains("opened")) {
      setFaqClass("");
    } else {
      var acc = document.getElementsByClassName("faq-block");
      for (let s = 0; s < acc?.length; s++) {
        acc[s].classList.remove("opened");
      }
      setFaqClass("opened");
    }
  };
  return (
    <>
      <div className="faq-sec bg-light">
        <div className="container">
          <div className="faq-blocks">
            <div className="left-faq">
              
                  <div
                    id={ArticleCard.id}
                    className={
                      selected == ArticleCard.id
                        ? `faq-block ${faqClass}`
                        : "faq-block"
                    }
                    key={ArticleCard.id}
                  >
                    <h4
                      className="faq-title"
                      onClick={(e) => isShowContent(e, ArticleCard.id)}
                    >
                      {ArticleCard.name}
                    </h4>

                    <>
                      <div className="faq-content">
                        {ArticleCard.body}
                      </div>
                    </>
                  </div>
                

              
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

