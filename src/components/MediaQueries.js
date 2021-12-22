const device_min = {
  mobileS_min: 320,
  mobileM_min: 375,
  mobileL_min: 425,
  tablet_min: 768,
  laptop_min: 1024,
  laptopL_min: 1440,
  desktop: 2560
}

const device_max = {
    mobileS_max: 374,
    mobileM_max: 424,
    mobileL_max: 767,
    tablet_max: 1023,
    laptop_max: 1439,
    laptopL_max: 2559,
    desktop: 2560
  }

export const MediaQueries = (key1, key2) => {
    return (style) => `@media (min-width: ${device_min[key1]}px) and (max-width: ${device_max[key2]}px)  {${style}}`
}

