import produce from 'immer';
import * as React from 'react';
import { CompositionMethod, useComposedCssClasses } from '../../hooks/useComposedCssClasses';
import { CardProps } from '../../models/cardComponent';
// import '../../sass/style.css';


export interface StandardCardConfig {
  showOrdinal?: boolean
}

export interface StandardCardProps extends CardProps {
  configuration: StandardCardConfig,
  customCssClasses?: StandardCardCssClasses,
  cssCompositionMethod?: CompositionMethod
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
  title?: string,
  ctaButton?: string,
  ProductPriceClass?: string

}

const builtInCssClasses: StandardCardCssClasses = {
  container: 'justify-between border rounded-lg mb-4 p-4 shadow-sm flex flex-row ProductVerticalContainer',
  header: 'text-grey-800 ProductHeaderClass text-2xl font-bold',
  body: 'flex justify-end pt-2.5',
  descriptionContainer: 'w-full text-base',
  ctaContainer: 'flex flex-col justify-end ml-4',
  cta1: 'min-w-max bg-blue-600 text-white font-medium rounded-lg py-2 px-5 shadow',
  cta2: 'min-w-max bg-white text-blue-600 font-medium rounded-lg py-2 px-5 mt-2 shadow',
  ordinal: 'mr-1.5 text-lg font-medium',
  title: 'text-lg font-bold text-black-800',
  ctaButton: 'flex justify-center border-2 w-full rounded-md self-center	align-middle mt-4 hover:bg-green-900',
  ProductPriceClass: 'ProductPrice flex flex-row'
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
export function ProductsCard(props: StandardCardProps): JSX.Element {
  const { configuration, result, customCssClasses, cssCompositionMethod } = props;
  const cssClasses = useComposedCssClasses(builtInCssClasses, customCssClasses, cssCompositionMethod);

  /**
  * This function limits the words
  * @param string 
  * @param limit 
  * @returns The variable containing the truncated Description.
  */
  function limit(string = ' ', limit = 0) {
    return string.substring(0, limit)
  }
  // console.log(result, "result");

  const Products: any = result.rawData;
  // console.log(Products, "Products");
  
  let productName = Products.name; // Name of the products
  let productDescription = Products.description;  // Description of the Products
  let productPrice = Products.c_product_price; // Price of the Products
  let productSpeed = Products.c_speed; // Speed of the Products




  // TODO (cea2aj) Update this to render the ordinal once we get mocks from UX
  function renderOrdinal(index: number) {
    // return (
    //   <div className={cssClasses.ordinal}>{index}</div>
    // );
    return null;
  }

  function renderTitle(title: string) {
    return <div className={cssClasses.title}>{title}</div>
  }

  return (
    <>
        <div className={cssClasses.container}>
        <div>
          <h3 className={cssClasses.header}>{productName}</h3>
          <p>{productSpeed}</p>
          <p>{productDescription}</p>
          <p>{productPrice}</p>
        </div>
        </div>
    </>
  );
}