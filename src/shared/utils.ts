import convert from "color-convert";
import { StyleSheet, css } from 'aphrodite/no-important';
import { fire, poor, adequate, diamond, white } from 'shared/styles/colors';

export const isProduction = () => process.env.NODE_ENV === 'production';

export enum PerformanceScale {
    poor,
    adequate,
    great,
    diamond
  }
  
  export function ratingChecker(ratingNumber: number) {
    let rating = {
      color: poor,
      emoji: "😂"
    }
    if (ratingNumber >= 93) {
      rating = {
        color: diamond,
        emoji: "💎"
      }
    } else if (ratingNumber >= 86) {
      rating = {
        color: fire,
        emoji: "🔥"
      }
    } else if (ratingNumber >= 81) {
      rating = {
        color: adequate,
        emoji: "👍"
      }
    } 
    return rating;
  };

  export function performanceToClass(performance: PerformanceScale): string {
    return css({
        [PerformanceScale.poor]: styles.poorFill,
        [PerformanceScale.adequate]: styles.adequateFill,
        [PerformanceScale.great]: styles.fireFill,
        [PerformanceScale.diamond]: styles.diamondFill,
    }[performance]);
}

export const styles =  StyleSheet.create({
    diamondFill: {
        backgroundColor: `rgb(${diamond})`,
    },
    fireFill: {
        backgroundColor: `rgb(${fire})`,
        color: white
    },
    poorFill: {
        backgroundColor: `rgb(${poor})`,
    },
    adequateFill: {
        backgroundColor: `rgb(${adequate})`,
    },
});

export function lightenColor(rgbString){
    if (rgbString) {
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
      const saturation = 22;
      const lightness = 48;
      // -------------------------
      const rgbArray = rgbString.split(",").map(item => Number(item));
      const hsl: number[] = convert.rgb.hsl(rgbArray);
      const hue = hsl[0];
  
      return convert.hsl.rgb(hue, saturation, lightness);
    } else {
      return "(0,0,0)";
    }
  }

  export function trimName(name: string): string {
    if (name) {
      let sanitizedName = ""
      const arrayName = name.split(/[\s.]+/)
     arrayName.map((name, index) => {
       arrayName.length-1 === index ? sanitizedName += name : sanitizedName += name.substring(0,1) + ". "
      })
     return sanitizedName
    } else {
      return "";
    }
  }