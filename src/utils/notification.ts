import { notification } from 'antd';
import { IconType } from 'antd/es/notification/interface';
type IProp = {
    message: string
    type: IconType,
    description?: string
}
const Notification = (props:IProp) => {
    const {message,type,description} = props
    notification.open({
      message: message,
      type:type,
      description: description
    });
};
export default Notification