const findHrefsToReport = (
  hrefs: string[],
  prevFirstHref: string,
  prevLastHref: string,
): string[] => {
  const prevFirstHrefIndex = hrefs.findIndex((href) => href === prevFirstHref);
  const prevLastHrefIndex = hrefs.findIndex((href) => href === prevLastHref);
  const deleteCount = prevLastHrefIndex - prevFirstHrefIndex + 1;
  // TODO: think about case when there is no longer such a hrefs
  const hrefsToReport = hrefs.slice();
  hrefsToReport.splice(prevFirstHrefIndex, deleteCount);
  return hrefsToReport;
};

export { findHrefsToReport };
