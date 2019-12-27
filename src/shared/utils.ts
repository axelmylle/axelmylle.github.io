import convert from "color-convert";
import { StyleSheet, css } from 'aphrodite/no-important';
import { kiwi, strawberry, orange, diamond } from 'shared/styles/colors';

export const isProduction = () => process.env.NODE_ENV === 'production';

export enum PerformanceScale {
    poor,
    adequate,
    great,
    diamond
  }
  
  export function ratingChecker(rating: number): PerformanceScale {
    let ratingType = PerformanceScale.poor;
    if (rating >= 93) {
        ratingType = PerformanceScale.diamond;
    } else if (rating >= 85) {
        ratingType = PerformanceScale.great;
    } else if (rating >= 83) {
        ratingType = PerformanceScale.adequate;
    } 
    return ratingType;
  };

  export function performanceToClass(performance: PerformanceScale): string {
    return css({
        [PerformanceScale.poor]: styles.strawberryFill,
        [PerformanceScale.adequate]: styles.orangeFill,
        [PerformanceScale.great]: styles.kiwiFill,
        [PerformanceScale.diamond]: styles.diamondFill,
    }[performance]);
}

export const styles =  StyleSheet.create({
    diamondFill: {
        backgroundColor: diamond,
    },
    kiwiFill: {
        backgroundColor: kiwi,
    },
    strawberryFill: {
        backgroundColor: strawberry
    },
    orangeFill: {
        backgroundColor: orange,
    },
});

export function lightenColor(rgbString){
    if (rgbString) {
        console.log(rgbString)
      const saturation = 98;
      const lightness = 91;
      // -------------------------
      const rgbArray = rgbString.split(",").map(item => Number(item));
      const hsl: number[] = convert.rgb.hsl(rgbArray);
      const hue = hsl[0];
  
      return convert.hsl.rgb(hue, saturation, lightness);
    } else {
      return "(0,0,0)";
    }
  }

  export function darkenColor(rgbString: string): string {
    if (rgbString) {
      const saturation = 52;
      const lightness = 109;
      // -------------------------
      const rgbArray = rgbString.split(",").map(item => Number(item));
      const hsl: number[] = convert.rgb.hsl(rgbArray);
      const hue = hsl[0];
  
      return convert.hsl.rgb(hue, saturation, lightness);
    } else {
      return "(0,0,0)";
    }
  }