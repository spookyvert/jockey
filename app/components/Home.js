import React, {
	Component
} from 'react';
import {
	Link
} from 'react-router-dom';
import {
	Row,
	Col,
	Container
} from 'reactstrap';
import routes from '../constants/routes';
import Search from './Search';



export default class Home extends Component {


	state = {}

	componentDidMount() {
		// add fetch stuff here
	}

	render() {
		return (
			<Container fluid>
        <Row className="vh-100">
          <Col xs="6" className="fg-light-gray bg-black">
            <div className="main-logo text-center push-from-top">
              Jockey
            </div>
            
            <div className="py-5 px-5 text-small text-center">
              <p className="font-weight-600 text-uppercase text-spaced">
                New to Jockey?
              </p>
              <p>
                Your guest can scan your QR Code and request music directly to you!
              </p>
              <p>
                To create a QR code, click the link below!
              </p>
              <p>
                That's all!
              </p>
              <p>
                Just like magic!
              </p>
              <p>
                ...not really 🤫
              </p>
              <Link to={routes.QR} className="btn btn-accent">Start</Link>
            </div>
          </Col>
          <Col xs="6" className="fg-light-gray bg-dark-gray">
            <div className="text-center push-from-top">
              <h4 className="font-weight-600 text-uppercase text-small text-spaced">Current Requests</h4>
              <div>
                <Search/>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
		);
	}
}
