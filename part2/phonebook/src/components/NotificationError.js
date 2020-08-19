import React from 'react'

const NotificationError = ({message}) => {
	if(message === null){
		return null
	}

	return (
		<div className="message_error">
			{message}
		</div>
	)
}

export default NotificationError