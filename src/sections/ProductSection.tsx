import { SectionComponent, SectionConfig } from '../models/sectionComponent';
import { StandardCard } from '../components/cards/StandardCard';
import { CompositionMethod, useComposedCssClasses } from '../hooks/useComposedCssClasses';
import React, { useContext } from 'react';
import { useSearchState } from "@yext/search-headless-react";

import ProductVerticalResults from '../components/ProductVerticalResults';
import { ProductsCard } from '../components/cards/ProductsCard';
import ProductPage from '../pages/ProductPage';
// import '../sass/style.css'
interface ProductsSectionCssClasses {
    container?: string,
    header?: string,
    body?: string,
    descriptionContainer?: string,
    ctaContainer?: string,
    cta1?: string,
    cta2?: string,
    ordinal?: string,
    title?: string,
    ctaButton?: string,
    section?: string
}

const builtInCssClasses: ProductsSectionCssClasses = {
    container: 'justify-between border rounded-lg mb-4 p-4 shadow-sm flex flex-row ProductVerticalContainer',
    header: 'text-grey-800 ProductHeaderClass',
    body: 'flex justify-end pt-2.5',
    descriptionContainer: 'w-full text-base',
    ctaContainer: 'flex flex-col justify-end ml-4',
    cta1: 'min-w-max bg-blue-600 text-white font-medium rounded-lg py-2 px-5 shadow',
    cta2: 'min-w-max bg-white text-blue-600 font-medium rounded-lg py-2 px-5 mt-2 shadow',
    ordinal: 'mr-1.5 text-lg font-medium',
    title: 'text-lg font-bold text-black-800',
    ctaButton: 'flex justify-center border-2 w-full rounded-md self-center	align-middle mt-4 hover:bg-green-900',
    section: ''
};

interface ProductsSectionConfig extends SectionConfig {
    customCssClasses?: ProductsSectionCssClasses,
    compositionmethod?: CompositionMethod
}

/**
 * This function returns the Product vertical cards on Universal Page.
 * @param props results, header
 * @returns Cards of Product Vertical on Universal Page.
 */
const ProductsSection: SectionComponent = function (props: ProductsSectionConfig): JSX.Element | null {

    const cssClasses = useComposedCssClasses(builtInCssClasses, props.customCssClasses, props.compositionmethod);
    const { results, cardConfig, header } = props;
    const latestQuery = useSearchState((state) => state.query.mostRecentSearch);
    const verticalResults: any = useSearchState(state => state.universal);
    // console.log('ProductVerticalResults', verticalResults);
    const ProductVerticalResults: any = verticalResults.verticals[0].results;
    
    let ProductResultsObj: any = '';
    ProductResultsObj = ProductVerticalResults.map((_elements: any) => {
        return _elements.rawData;
    });
       /**
   * This function limits the words
   * @param string 
   * @param limit 
   * @returns The variable containing the truncated Description.
   */
function limit(string = ' ', limit = 0) {
    return string.substring(0, limit)
  }
    ProductResultsObj = ProductResultsObj.map((res: any) => {
        let ProductImage = res.photoGallery ? res.photoGallery[0].image.url : null;
        let LandingPageUrl = res.landingPageUrl ? res.landingPageUrl : '#';
        let ProductsDescriptionUniversal = limit(res.richTextDescription, 100);
        //    landingPageUrl
        console.log(res, "res");
        return (
            <>
                <div>
                    <img className='ProductsImage' src={ProductImage}></img>
                    <h1 className={builtInCssClasses.title}>{res.name}</h1>
                    <p>{res.sku}</p>
                    <p>Price : £ {res.c_price}</p>
                    <p>{ProductsDescriptionUniversal}</p>
                    <a target="_blank" href={LandingPageUrl}>
                        <div className={cssClasses.ctaButton}>
                            <div className="sm:text-body align-middle font-heading  font-medium sm:text-base">View Product</div>
                        </div>
                    </a>
                </div>
            </>
        );

    })

    if (results.length === 0) {
        return null;
    }

    const cardComponent = cardConfig?.CardComponent || StandardCard;


    return (
        <>
            <section className={cssClasses.section}>
                {header}
                <div className='grid grid-rows-2 grid-flow-col gap-2'>{ProductResultsObj}</div>
            </section>
        </>
    );
};
export default ProductsSection;

