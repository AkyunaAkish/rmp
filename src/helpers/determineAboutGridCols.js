export default function determineAboutGridCols(dimensions) {
  if (dimensions > 1500) {
    return 4
  } else if(dimensions < 1500 && dimensions > 990) {
    return 6
  } else {
    return 12
  }
}
