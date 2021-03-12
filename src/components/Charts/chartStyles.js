import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  income: {
    background: 'rgb(255,255,255,0.85)',
    borderBottom: '10px solid rgba(0, 255, 0, 0.5)',
    margin: '30px 16px',
  },
  expense: {
    background: 'rgb(255,255,255,0.85)',
    borderBottom: '10px solid rgba(255, 0, 0, 0.5)',
    margin: '30px 16px',
  },
}));