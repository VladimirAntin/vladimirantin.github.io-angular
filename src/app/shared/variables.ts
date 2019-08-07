
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
