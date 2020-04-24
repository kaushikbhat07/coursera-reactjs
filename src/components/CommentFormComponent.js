import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isModalToggle: false
		};
	}

	ToggleModal() {
		this.setState({
			isModalToggle: !this.state.isModalToggle
		})
	};

	handleSubmit(values) {
		this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
	}
	render() {
		return (
			<React.Fragment>
				<Button outline color="secondary" onClick={() => this.ToggleModal()}>
					<i className="fa fa-pencil fa-sm"></i>&nbsp;
					Submit Comment
				</Button>

				<Modal isOpen={this.state.isModalToggle} toggle={() => this.ToggleModal()}>
					<LocalForm onSubmit={(values) => this.handleSubmit(values)}>
						<ModalHeader toggle={() => this.ToggleModal()}>Submit Comment</ModalHeader>
						<ModalBody>
							<Row className="form-group">
								<Label htmlFor="rating" md={12}>Rating</Label>
								<Col md={12}>
									<Control.select model=".rating" name="rating"
										className="form-control">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</Control.select>
								</Col>
							</Row>
							<Row className="form-group">
								<Label htmlFor="firstname" md={12}>Your Name</Label>
								<Col md={12}>
									<Control.text model=".firstname" id="firstname" name="firstname"
										placeholder="Your Name"
										className="form-control"
										validators={{
											required, minLength: minLength(3), maxLength: maxLength(15)
										}}
									/>
									<Errors
										className="text-danger"
										model=".firstname"
										show="touched"
										messages={{
											required: 'Required ',
											minLength: 'Must be greater than 2 characters ',
											maxLength: 'Must be 15 characters or less '
										}}
									/>
								</Col>
							</Row>
							<Row className="form-group">
								<Label htmlFor="message" md={12}>Comment</Label>
								<Col md={12}>
									<Control.textarea model=".message" id="message" name="message"
										rows="6"
										className="form-control" />
								</Col>
							</Row>
						</ModalBody>
						<ModalFooter>
							<Button type="submit" color="primary">Submit</Button>
							<Button color="secondary" onClick={() => this.ToggleModal()}>Cancel</Button>
						</ModalFooter>
					</LocalForm>
				</Modal>

			</React.Fragment>
		);
	}
}

export default CommentForm;