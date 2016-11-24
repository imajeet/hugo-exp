import { fade } from 'material-ui/utils/colorManipulator';
import * as Colors from 'material-ui/styles/colors';
import { spacing } from 'material-ui/styles';

const rawBaseTheme = {
  ...spacing,
  fontFamily: 'AvenirNext, sans-serif',
  palette: {
    primary1Color: '#767679',
    primary2Color: '#0066FF',
    primary3Color: Colors.lightBlack,
    accent1Color: Colors.pinkA200,
    accent2Color: Colors.grey100,
    accent3Color: Colors.grey500,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: fade(Colors.darkBlack, 0.3),
  },
};

export default rawBaseTheme;

