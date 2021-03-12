import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(rgb(255,255,255,0.85), rgb(255,255,255,0.92))',
    padding: '5px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  cartContent: {
    paddingTop: '10px',
  },
  divider: {
    margin: '20px 0',
  },
    button: {
      background: 'orange',
      '&:hover': {
          background: '#ED9A00'
      }
  },
  mainHeader: {
  padding: '0 10px',
    }
}));