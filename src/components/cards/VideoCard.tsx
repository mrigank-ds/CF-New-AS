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
export function VideosCard(props: StandardCardProps): JSX.Element {
  const { configuration, result, customCssClasses } = props;
  const cssClasses = builtInCssClasses;

  const videoCard : any  = result.rawData;
  let videoName = videoCard.name;
  let videoThumbnail = videoCard.c_thumbnail_photo?.url;
  let videoDescription = videoCard.richTextDescription;
  let videoYoutubeUrl = videoCard.c_video_url;
  console.log(videoCard,"videoCard"); 

 function limit(string?: string, limit = 0) {
    return string?.substring(0, limit)
  }
 
  
  // console.log(greeting, "greeting");

 return (
    <>
        <div className='mb-6 pb-6 mt-6'>
            <img src={videoThumbnail}></img>
            <p className='text-2xl font-bold'>{videoName}</p>
            <p>{videoDescription}</p>
            <a href={videoYoutubeUrl} target="_blank">
                 <button>
                     Watch Video
                 </button>
            </a>
        </div>
    </>
  );
}

