// File: justice_juggernaut_sources.tsx

interface DataSource {
  name: string;
  url: string;
}

interface JurisdictionSources {
  [jurisdiction: string]: DataSource[] | Record<string, DataSource>;
}

const justiceJuggernautSources: JurisdictionSources = {
  "New Mexico": {
    "New Mexico Compilation Commission (NMCC)": {
      name: "NMCC Website",
      url: "http://www.nmcompcomm.us/"
    },
    "New Mexico State Legislature": {
      name: "New Mexico Legislature Website",
      url: "https://www.nmlegis.gov/"
    },
    "New Mexico Courts Case Lookup": {
      name: "New Mexico Courts Case Lookup",
      url: "https://caselookup.nmcourts.gov/caselookup/"
    },
    "New Mexico Administrative Code (NMAC)": {
      name: "New Mexico Administrative Code",
      url: "https://www.srca.nm.gov/nmac/"
    },
    "New Mexico Register of Rules and Regulations": {
      name: "New Mexico Register of Rules and Regulations",
      url: "https://www.nmcpr.state.nm.us/nmregister/"
    },
    "New Mexico Supreme Court Opinions": {
      name: "New Mexico Supreme Court Opinions",
      url: "https://nmsupremecourt.nmcourts.gov/"
    },
    "New Mexico Statutes and Court Rules": {
      name: "New Mexico Statutes and Court Rules",
      url: "https://www.nmcompcomm.us/"
    },
    "New Mexico Public Regulation Commission (NMPRC) Decisions and Orders": {
      name: "NMPRC Decisions and Orders",
      url: "https://www.nmprc.state.nm.us/decisions-orders.aspx"
    },
    "New Mexico Environmental Improvement Board (EIB) Decisions": {
      name: "New Mexico EIB Decisions",
      url: "https://www.env.nm.gov/eib/eib-decisions/"
    },
    "New Mexico Attorney General Opinions": {
      name: "New Mexico Attorney General Opinions",
      url: "https://www.nmag.gov/opinions.aspx"
    },
    "New Mexico Secretary of State Business Services": {
      name: "New Mexico Secretary of State Business Services",
      url: "https://www.sos.state.nm.us/business-services/"
    },
    "New Mexico Taxation and Revenue Department": {
      name: "New Mexico Taxation and Revenue Department",
      url: "https://www.tax.newmexico.gov/"
    },
    "New Mexico Workers' Compensation Administration (WCA)": {
      name: "New Mexico WCA",
      url: "https://workerscomp.nm.gov/"
    },
    "New Mexico Indian Affairs Department": {
      name: "New Mexico Indian Affairs Department",
      url: "https://www.iad.state.nm.us/"
    },
    "New Mexico Land Commissioner's Office": {
      name: "New Mexico Land Commissioner's Office",
      url: "https://www.nmstatelands.org/"
    },
    "New Mexico Department of Health": {
      name: "New Mexico Department of Health",
      url: "https://nmhealth.org/"
    },
    "New Mexico Environment Department": {
      name: "New Mexico Environment Department",
      url: "https://www.env.nm.gov/"
    },
    "New Mexico State Bar Association": {
      name: "New Mexico State Bar Association",
      url: "https://www.nmbar.org/"
    },
    "New Mexico Legal Aid": {
      name: "New Mexico Legal Aid",
      url: "https://www.newmexicolegalaid.org/"
    },
    "New Mexico Court of Appeals Opinions": {
      name: "New Mexico Court of Appeals Opinions",
      url: "https://nmcourts.gov/court-of-appeals/opinions.aspx"
    },
    "New Mexico State Library": {
      name: "New Mexico State Library",
      url: "http://www.nmstatelibrary.org/"
    },
    "University of New Mexico Law Library": {
      name: "University of New Mexico Law Library",
      url: "https://lawlibrary.unm.edu/"
    },
    "Santa Fe Public Library": {
      name: "Santa Fe Public Library",
      url: "https://santafelibrary.org/"
    },
    "Supreme Court Law Library": {
      name: "Supreme Court Law Library",
      url: "https://www.nmbar.org/Nmstatebar/For_Attorneys/Research_and_Resources_/Law_Library.aspx"
    },
    "Law Library of Congress": {
      name: "Law Library of Congress",
      url: "https://www.loc.gov/law/"
    },
    "Library of Congress": {
      name: "Library of Congress",
      url: "https://www.loc.gov/"
    },
    // Advanced sources for New Mexico
    "Advanced_Sources": [
      {
        name: "Westlaw",
        url: "https://legal.thomsonreuters.com/en/products/westlaw"
      },
      {
        name: "LexisNexis",
        url: "https://www.lexisnexis.com/"
      },
      {
        name: "Bloomberg Law",
        url: "https://www.bloomberglaw.com/"
      },
      {
        name: "HeinOnline",
        url: "https://home.heinonline.org/"
      },
      {
        name: "Fastcase",
        url: "https://www.fastcase.com/"
      },
      {
        name: "Google Scholar",
        url: "https://scholar.google.com/"
      },
      {
        name: "PACER",
        url: "https://www.pacer.gov/"
      },
      {
        name: "Cornell Legal Information Institute",
        url: "https://www.law.cornell.edu/"
      },
      {
        name: "FindLaw",
        url: "https://www.findlaw.com/"
      },
      {
        name: "American Bar Association",
        url: "https://www.americanbar.org/"
      },
      // Add more advanced sources for New Mexico here
    ],
  },
  "California": {
    "California Legislative Information": {
      name: "California Legislative Information",
      url: "https://leginfo.legislature.ca.gov/"
    },
    "California Courts": {
      name: "California Courts",
      url: "https://www.courts.ca.gov/"
    },
    "California Law": {
      name: "California Law",
      url: "https://leginfo.legislature.ca.gov/faces/codes.xhtml"
    },
    "California Regulations": {
      name: "California Regulations",
      url: "https://govt.westlaw.com/calregs/"
    },
    "California Law Library": {
      name: "California Law Library",
      url: "http://www.saclaw.org/"
    },
    // Advanced sources for California
    "Advanced_Sources": [
      {
        name: "Westlaw",
        url: "https://legal.thomsonreuters.com/en/products/westlaw"
      },
      {
        name: "LexisNexis",
        url: "https://www.lexisnexis.com/"
      },
      {
        name: "Bloomberg Law",
        url: "https://www.bloomberglaw.com/"
      },
      {
        name: "HeinOnline",
        url: "https://home.heinonline.org/"
      },
      {
        name: "Fastcase",
        url: "https://www.fastcase.com/"
      },
      {
        name: "Google Scholar",
        url: "https://scholar.google.com/"
      },
      {
        name: "PACER",
        url: "https://www.pacer.gov/"
      },
      {
        name: "Cornell Legal Information Institute",
        url: "https://www.law.cornell.edu/"
      },
      {
        name: "FindLaw",
        url: "https://www.findlaw.com/"
      },
      {
        name: "California Legislative Counsel Bureau",
        url: "https://leginfo.legislature.ca.gov/"
      },
      // Add more advanced sources for California here
    ],
  },
  // Global advanced sources
  "Advanced Sources": [
    {
      name: "American Law Institute",
      url: "https://www.ali.org/"
    },
    {
      name: "Public Library of Law",
      url: "https://www.plol.org/"
    },
    {
      name: "Justia",
      url: "https://www.justia.com/"
    },
    {
      name: "National Conference of State Legislatures",
      url: "https://www.ncsl.org/"
    },
    {
      name: "National Center for State Courts",
      url: "https://www.ncsc.org/"
    },
    {
      name: "American Civil Liberties Union",
      url: "https://www.aclu.org/"
    },
    {
      name: "Federal Judicial Center",
      url: "https://www.fjc.gov/"
    },
    {
      name: "National Archives and Records Administration",
      url: "https://www.archives.gov/"
    },
    {
      name: "United Nations Legal Research",
      url: "https://www.un.org/law/"
    },
    // Add more global advanced sources here
  ],
};

export default justiceJuggernautSources;
