type LinkType = {
  text: string;
  href: string;
};

type ContactUsType = {
  icon: string;
  link: LinkType;
};

type WeAcceptType = {
  icon: string;
  href: string;
};

export type LinksData = Array<LinkType>;

export type ContatUsData = Array<ContactUsType>;

export type WeAcceptData = Array<WeAcceptType>;
