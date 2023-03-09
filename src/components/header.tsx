import * as React from "react";

type Link = {
  label: string;
  url: string;
};

type HeaderProps = {
  _site: any;
};

const Header = ({ _site }: HeaderProps) => {
  // const { t, i18n } = useTranslation();
  // console.log('i18n', i18n);
  // const links = _site.c_header_links;
  const linkDoms = _site.c_header_links.map((link:any) => (
    <div key={link.label}>
      <a href={link.uRL} target="_blank" rel="noreferrer">
        {link.label}
      </a>
    </div>
  ));

  return (
    <div className="bg-gray-50">
      <div className="centered-container">
        <nav className="py-6 flex items-center justify-between">
          <div className="flex gap-x-4 items-center">
            <img
              src="https://cdn.fs.brandfolder.com/cache=expiry:604800/deY3VGFpSjC761Abjbfc"
              width="50"
              height="50"
            ></img>
            <div className="flex gap-x-4 text-sm font-semibold text-body">
              {linkDoms}
            </div>
          </div>
          <div className="space-x-5"></div>
          <div className="flex gap-x-4">
            {/* <div className=" h-12 pt-4 ">
              <Cta
                buttonText={t("order_online")}
                url="#"
                style="text-white bg-orange shadow-xl"
              ></Cta>
            </div> */}
            {/* <div>
              {t('demo_welcome')}
            </div> */}
            {/* <div className=" h-12 pt-4 ">
              <LanguageDropdown />
            </div> */}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
