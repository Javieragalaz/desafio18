import Alerts from 'react-bootstrap/Alert';

const Alert = (props) => {

<Alert key= {props.variant} variant= {props.variant}>
    {props.msg}
</Alert>

}

export default Alerts;