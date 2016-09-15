export default function determineGridCols(dimensions) {
  if (dimensions > 1500) {
    return { bootStrapCols: 4, materialUICols: 3 }
  } else if(dimensions < 1500 && dimensions > 990) {
    return { bootStrapCols: 6, materialUICols: 2 }
  } else {
    return { bootStrapCols: 12, materialUICols: 1 }
  }
}
