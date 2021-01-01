import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

export default function ButtonPrimary(props) {
  return (
    <Button
      startIcon = {props.content === 'Ok' ? <SaveIcon /> : ''}
      variant="contained"
      color="primary">
      {props.content}
    </Button>
  )
}
