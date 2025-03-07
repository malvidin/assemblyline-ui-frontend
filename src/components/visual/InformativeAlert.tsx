import { alpha, Theme } from '@mui/material';
import createStyles from '@mui/styles/createStyles';
import withStyles from '@mui/styles/withStyles';
import { Alert } from '@mui/material';
import 'moment/locale/fr';

const StyledAlert = withStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(2),
      color: theme.palette.text.secondary,
      backgroundColor: alpha(theme.palette.text.primary, 0.04)
    },
    icon: {
      color: `${theme.palette.text.secondary} !important`
    },
    message: {
      width: '100%',
      textAlign: 'left'
    }
  })
)(Alert);

const InformativeAlert = ({ children, ...props }) => (
  <StyledAlert {...props} severity="info">
    {children}
  </StyledAlert>
);

export default InformativeAlert;
