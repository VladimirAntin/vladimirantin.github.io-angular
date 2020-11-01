import {NgxUiLoaderConfig} from "ngx-ui-loader/lib/utils/interfaces";
import {PB_DIRECTION, POSITION, SPINNER} from "ngx-ui-loader";

export const ngxProgress = {
  radius: 60,
  space: -10,
  outerStrokeWidth: 10,
  innerStrokeColor: '#e7e8ea',
  innerStrokeWidth: 10,
  showSubtitle: false,
  clockwise: false,
  startFromZero: true,
  animation: true,
  animationDuration: 200,
};


export const ngTyped = {
  speed: 30,
  timeout: 500,
  hideCursorOnComplete: true,
  cursor: '_'
};

export function openExternalLink(url: string) {
  window.open(url, '_blank');
}


export const NGX_LOADER: NgxUiLoaderConfig = {
  bgsType: SPINNER.ballScaleMultiple,
  bgsPosition: POSITION.bottomRight,
  bgsSize: 50,
  bgsColor: '#fff',
  fgsColor: '#fff',
  overlayColor: 'rgba(40,40,40,0)',
  fgsType: SPINNER.ballScaleMultiple,
  fgsPosition: POSITION.bottomRight,
  fgsSize: 50,
  blur: 50,
  hasProgressBar: true,
  pbDirection: PB_DIRECTION.leftToRight,
  pbColor: '#fff',
  minTime: 1000
}
