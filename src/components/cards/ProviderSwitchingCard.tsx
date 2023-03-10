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
export function ProviderSwitchingCard(props: StandardCardProps): JSX.Element {
    const { configuration, result, customCssClasses } = props;
    const cssClasses = builtInCssClasses;

    const providerSwitchingCard: any = result.rawData;
    let psName = providerSwitchingCard.name;
    let psDesc = providerSwitchingCard.c_description;
    let psImageUrl = providerSwitchingCard.c_image ?providerSwitchingCard.c_image[0].url : "https://a.mktgcdn.com/p-sandbox/ICqsT6dBI9UeKt2G4bKSDEZC5U8q8AvRlATjy2v_E7Y/1152x960.jpg";
    let psLandingUrl = providerSwitchingCard.landingPageUrl;

    function limit(string?: string, limit = 0) {
        return string?.substring(0, limit)
    }

    return (
        <>
            <div className='mb-6 pb-6 mt-6'>
                <img src={psImageUrl} height={'130px'} width={'130px'}></img>
                <p className='text-2xl font-bold'>{psName}</p>
                <p>{psDesc}</p>
                <a href={psLandingUrl}>
                    <button>
                        See More
                    </button>
                </a>
            </div>
        </>
    );
}

