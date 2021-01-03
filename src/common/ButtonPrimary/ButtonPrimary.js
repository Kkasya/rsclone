import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

export default function ButtonPrimary({ content, action }) {
  return (
    <Button
      startIcon = {content === 'Ok' ? <SaveIcon /> : ''}
      variant="contained"
      color="primary"
      onClick={action}>
      {content}
    </Button>
  )
}
