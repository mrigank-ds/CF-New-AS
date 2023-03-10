import { StandardCard } from '../components/cards/StandardCard';
import { ProductsCard } from '../components/cards/ProductsCard';
import { ArticlesCard } from '../components/cards/ArticlesCard';
import { FaqCard } from '../components/cards/FaqCards';
import { VideosCard } from '../components/cards/VideoCard';
import { VerticalConfig } from '../components/UniversalResults';
import { LocationCard } from '../components/cards/LocationCard';
import LocationSection from '../sections/LocationSection';
import ProductsSection from '../sections/ProductSection';

export type UniversalResultsConfig = Record<string, VerticalConfig>;

export const universalResultsConfig: UniversalResultsConfig = {
  // locations: {
  //   SectionComponent: LocationSection,
  //   label: 'Locations',
  //   viewAllButton: true,
  //   cardConfig: {
  //     CardComponent: LocationCard,
  //     showOrdinal: false
  //   }
  // },
  product: {
    SectionComponent:ProductsSection,
    label: 'Products',
    viewAllButton: true,
    cardConfig: {
      CardComponent: ProductsCard,
      showOrdinal: false
    }
  },
  help_articles: {
    label: 'Articles',
    viewAllButton: true,
    cardConfig: {
      CardComponent: ArticlesCard,
      showOrdinal: false
    }
  },
  video: {
    label: 'Videos',
    viewAllButton: true,
    cardConfig: {
      CardComponent: VideosCard,
      showOrdinal: false
    }
  },
  provider_switching: {
    label: 'Provider Switching',
    viewAllButton: true,
    cardConfig: {
      CardComponent: VideosCard,
      showOrdinal: false
    }
  }
  //  
}