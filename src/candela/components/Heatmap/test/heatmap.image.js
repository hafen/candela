import imageTest from '../../../util/imageTest';

imageTest({
  name: 'heatmap',
  url: 'http://localhost:38000/examples/#heatmap',
  selector: '#vis-element',
  threshold: 0.15
});