/**
 * Site-wide facts and navigation.
 *
 * Contact details were read off the client's Instagram captions, not supplied
 * directly — see docs/open-questions.md items 9 and 14 before launch.
 */

export const site = {
  name: "Dan Lami Real Estate",
  legalName: "Dan Lami Real Estate Ltd",
  authority: "Africa's Luxury Real Estate Authority",
  strapline: "Structured for Wealth. Built for Legacy.",
  domain: "danlamirealestate.com",
  disciplines: [
    "Luxury Real Estate",
    "Investment Advisory",
    "Development",
    "Strategic Partnerships",
  ],
  location: "Lagos, Nigeria",

  // UNCONFIRMED — from an Instagram caption.
  phone: "07032535735",
  phoneHref: "tel:+2347032535735",
  email: "danlamirealestate@gmail.com",
  whatsapp: "https://wa.me/2347032535735",

  social: {
    instagram: "https://instagram.com/danlamirealestate",
    facebook: "#",
    linkedin: "#",
    youtube: "#",
  },
} as const;

export const nav = [
  { href: "/properties", label: "Properties" },
  { href: "/developments", label: "Developments" },
  { href: "/services", label: "Services" },
  { href: "/investors", label: "Investors" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerNav = {
  Explore: [
    { href: "/properties", label: "Properties" },
    { href: "/developments", label: "Signature Developments" },
    { href: "/services", label: "What We Do" },
    { href: "/partnerships", label: "Development Partnerships" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/philosophy", label: "Our Philosophy" },
    { href: "/the-closer", label: "The Closer" },
    { href: "/partners", label: "Partner With Us" },
  ],
  Invest: [
    { href: "/investors", label: "For Investors" },
    { href: "/diaspora", label: "For Diaspora Clients" },
    { href: "/contact", label: "Book a Consultation" },
  ],
} as const;
