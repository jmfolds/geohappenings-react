import React from 'react';
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';
const firebase = require("firebase");

class Happenings extends React.Component {
	render() {
		return <div className="modal fade" id="chat-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div className="modal-dialog">
			<div className="modal-content">
			<div className="modal-header">
				<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				<h4 className="modal-title" id="myModalLabel">Happenings</h4>
			</div>
			<div className="modal-body">
				<ul id="chat-container" className="list-group msg-container">
				{this.renderMessages()}
				</ul>
			</div>
			<div className="modal-footer">
				<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
			</div>
			</div>
		</div>
		</div>;
	}

	componentWillMount() {
		var ref = firebase.database().ref("users");
		this.bindAsArray(ref, "users");
	}

	renderUsers() {
		return this.data.users.map(u => <li key={u[".key"]}>{u[".key"]}</li> );
	}

	renderMessages() {
		this.data.messages = [];
		this.data.users.map(u => {
			for (let prop in u.messages) {
				const tC = new Date().getTime();
				const tE = Math.floor((tC - u.messages[prop].timeStamp) / 1000 / 60); //get time elapsed since the previous messages in firebase
				const tS = (tE > 60) ? Math.floor((tE * 60) / 3600)  + ' hours ago' :  tE + ' minutes ago';
				this.data.messages.push(<li className="list-group-item chat-item" data-lat={u.messages[prop].lat} data-lon={u.messages[prop].lon} key={u.messages[prop].timeStamp}><div className="chat-date">{u.messages[prop].name}  {tS}</div><div>{u.messages[prop].text}</div></li>);
			}
		});
		this.data.messages.sort((a, b) => {
			return a.key>b.key ? -1 : a.key<b.key ? 1 : 0;
		});
		return this.data.messages;
	}
}

reactMixin(Happenings.prototype, ReactFireMixin)

export default Happenings;
